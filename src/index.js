import './style.css';
import {gameID, baseURL, newGame} from './modules/newGame.js'
import saveScore from './modules/saveScore.js';
import newScores from './modules/renderScore.js';
import { scoreList } from './modules/renderScore.js';

const playerName = document.querySelector('#user-name');
const playerScore = document.querySelector('#user-score');
const submitScoreBtn = document.getElementById('submit');
const refresh = document.getElementById('refresh');

submitScoreBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (playerName.value !== '' && playerScore.value !== '') saveScore(gameID, playerName.value, playerScore.value);
  playerName.value = '';
  playerScore.value = '';
});
refresh.addEventListener('click', async () => newScores(gameID, scoreList));
newScores(gameID, scoreList);