const errorMsg = document.querySelector(".input-label > p");
const emailInput = document.getElementById("email");
const submitButton = document.querySelector(".button");
const newsLetter = document.querySelector(".container");
const userEmail = document.querySelector(".user-email");
const sucessMsg = document.querySelector(".success");
const footer = document.querySelector(".footer");

const regex = new RegExp(emailInput.getAttribute("pattern"));

function handleEmailInput() {
  const isValidEmail = regex.test(emailInput.value);
  errorMsg.classList.toggle("hidden", isValidEmail);
  emailInput.dataset.stateError = !isValidEmail;
}

function handleFormSubmit() {
  const isValidEmail = regex.test(emailInput.value);
  if (isValidEmail) {
    newsLetter.classList.add("hide");
    userEmail.textContent = emailInput.value;
    footer.classList.add("hidden");
    newsLetter.addEventListener("animationend", () => {
      newsLetter.style.display = "none";
      sucessMsg.classList.remove("hidden");
      sucessMsg.classList.add("unhide");
    });
  }
}

emailInput.addEventListener("keyup", handleEmailInput);
submitButton.addEventListener("click", handleFormSubmit);

