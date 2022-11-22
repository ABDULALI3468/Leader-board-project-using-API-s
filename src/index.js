import "./styles/styles.css";
import party from "party-js";
import getData from "./modules/getData.js";
import postData from "./modules/postData.js";
import Score from "./modules/score.js";
import inValidInput from "./modules/validation.js";

const scoreList = document.querySelector(".scoreList");
const submit = document.querySelector(".submit");
const refreshBtn = document.querySelector(".scoreRefresh");
const nameInput = document.querySelector(".nameInput");
const scoreInput = document.querySelector(".scoreInput");
const hamburger = document.querySelector(".ham-container");
const crossicon = document.querySelector(".cross-icon");
const inputScoreContainer = document.querySelector(".addScores");

refreshBtn.addEventListener("click", async (e) => {
  party.confetti(document.body, {
    count: party.variation.range(100, 200),
  });
  e.preventDefault();
  scoreList.innerHTML = "";
  getData();
});

submit.addEventListener("click", (e) => {
  if (nameInput.value && scoreInput.value) {
    party.confetti(document.body, {
      count: party.variation.range(100, 200),
    });
    const list = new Score(nameInput.value, scoreInput.value);
    e.preventDefault();
    postData(list);
    scoreList.innerHTML = "";
    nameInput.value = "";
    scoreInput.value = "";

    nameInput.style.border = "none";
    nameInput.style.placeholder = "Your name";
    nameInput.style.removeProperty("--color");

    scoreInput.style.border = "none";
    scoreInput.style.placeholder = "Your score";
    scoreInput.style.removeProperty("--color");
    inputScoreContainer.setAttribute("data-visible", "false");
    document.body.style.overflow = "auto";
    setTimeout(getData, 500);
  } else {
    inValidInput(nameInput, scoreInput);

    nameInput.placeholder = "Please type something!";
    nameInput.style.border = "2px solid red";
    nameInput.style.setProperty("--color", "red");

    scoreInput.placeholder = "Please type something!";
    scoreInput.style.border = "2px solid red";
    scoreInput.style.setProperty("--color", "red");
  }
});

hamburger.addEventListener("click", () => {
  document.body.style.overflow = "hidden";
  const visibility = inputScoreContainer.getAttribute("data-visible");
  if (visibility === "false") {
    inputScoreContainer.setAttribute("data-visible", "true");
  } else if (visibility === "true") {
    inputScoreContainer.setAttribute("data-visible", "false");
  }
});

crossicon.addEventListener("click", () => {
  inputScoreContainer.setAttribute("data-visible", "false");
  document.body.style.overflow = "auto";
});

window.addEventListener("DOMContentLoaded", getData);
