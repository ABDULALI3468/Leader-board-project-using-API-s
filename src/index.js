import './styles/styles.css';
import party from 'party-js';
import getData from './modules/getData';
import test from './modules/test';
import Score from './modules/score.js';

const scoreList = document.querySelector('.scoreList');
const submit = document.querySelector('.submit');
const refreshBtn = document.querySelector('.scoreRefresh');
const nameInput = document.querySelector('.nameInput');
const scoreInput = document.querySelector('.scoreInput');

refreshBtn.addEventListener('click', async (e) => {
  party.confetti(document.body, {
    count: party.variation.range(100, 200),
  });
  e.preventDefault();
  scoreList.innerHTML = '';
  getData();
});

submit.addEventListener('click', (e) => {
  party.confetti(document.body, {
    count: party.variation.range(100, 200),
  });
  const list = new Score(nameInput.value, scoreInput.value);
  e.preventDefault();
  test(list);
  scoreList.innerHTML = '';
  document.querySelector('.nameInput').value = '';
  document.querySelector('.scoreInput').value = '';
  setTimeout(getData, 500);
});

window.addEventListener('DOMContentLoaded', getData);
