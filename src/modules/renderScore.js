const renderScore = async (gameID) => {
  const response = await fetch(`https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameID}/scores/`,
  );
  const data = await response.json();
  return data.result;
};

export const scoreList = document.querySelector('#score-list');
const newScores = async (gameID, scoreList) => {
  const results = await renderScore(gameID);
  results.reverse();
  scoreList.innerHTML = '';
  let html = '';
  results.forEach((result) => {
    html += `
        <li class="items"> ${result.user}:${result.score} </li>
        `;
  });
  scoreList.insertAdjacentHTML('afterbegin', html);
};

export default newScores;