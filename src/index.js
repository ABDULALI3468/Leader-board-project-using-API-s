import './styles/styles.css';
import Score from './modules/score.js';

let scoreArr = [];
if (JSON.parse(localStorage.getItem('scores'))) {
  scoreArr = JSON.parse(localStorage.getItem('scores'));
} else {
  scoreArr = localStorage.setItem('scores', JSON.stringify([]));
}

const scoreList = document.querySelector('.scoreList');
const nameInput = document.querySelector('.nameInput');
const scoreInput = document.querySelector('.scoreInput');
const submit = document.querySelector('.submit');

const render = () => {
  scoreList.innerHTML = null;
  const local = JSON.parse(localStorage.getItem('scores'));
  local.forEach((elem) => {
    const scoreCard = document.createElement('li');
    scoreCard.classList.add('eachScore');
    scoreCard.innerHTML = `${elem.name}: ${elem.score}`;
    scoreList.appendChild(scoreCard);
  });
};

submit.addEventListener('click', () => {
  const eachScore = new Score(nameInput.value, scoreInput.value);
  nameInput.value = '';
  scoreInput.value = '';
  scoreArr = JSON.parse(localStorage.getItem('scores'));
  scoreArr.push(eachScore);
  localStorage.setItem('scores', JSON.stringify(scoreArr));
  render();
});

window.addEventListener('load', render());
// window.addEventListener("load", c(scoreArr));
