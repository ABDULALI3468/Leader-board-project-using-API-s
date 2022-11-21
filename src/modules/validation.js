export const inValidInput = (nameInput, scoreInput) => {
  nameInput.placeholder = "Please type something!";
  nameInput.style.border = "2px solid red";
  nameInput.style.setProperty("--color", "red");

  scoreInput.placeholder = "Please type something!";
  scoreInput.style.border = "2px solid red";
  scoreInput.style.setProperty("--color", "red");
};


