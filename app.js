function el(id) {
  return document.getElementById(id);
}

let poll = [
  {
    tag: 'Messi',
    votes: 27,
  },

  {
    tag: 'C Ronaldo',
    votes: 34,
  },

  {
    tag: 'Neymar',
    votes: 14,
  },
];

var totalPoll = 0;

poll.map((item) => {
  totalPoll = totalPoll + item.votes;
});

console.log(totalPoll);

poll.map((pollItem) => {
  let percent = Math.round((pollItem.votes / totalPoll) * 100);
  console.log(percent);

  let div = document.createElement('div');
  div.className = 'progress-holder';
  div.innerHTML = `
    <h5 class="progress-tag">
        <input name="vote" class="vote" id=${pollItem.tag} type="radio" value="${pollItem.tag}" required/>
                    ${pollItem.tag}
                </h5>
    <div class="progress">
        <div class="progress-bar progress-bar-animated" role="progressbar"
            aria-valuenow="${percent}" aria-valuemin="0" aria-valuemax="100" style="width: ${percent}%;">
            <p class="progressValue">${percent}%</p>
        </div>
    </div>

    `;

  el('poll-holder').append(div);
});

el('poll-form').addEventListener('submit', (event) => {
  event.preventDefault();
  document.querySelectorAll('input[type="radio"]').forEach((item) => {
    if (item.checked) {
      el(
        'voteCheck'
      ).innerHTML = `You voted for <span class="name">${item.value}</span> <img src="./icons/tick.svg" width="16px" alt="">`;
      el('voteCheck').className = 'In';
      setTimeout(() => {
          el('voteCheck').className = 'Out'
      }, 1800);
    }
  });
});
