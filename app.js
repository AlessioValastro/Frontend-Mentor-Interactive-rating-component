const ratingButtons = document.querySelectorAll(".main__rating_buttons button");
const ratingPointDisplay = document.querySelector("#rating");
const defaultContainer = document.querySelector(".main__rating");
const submittedContainer = document.querySelector(".main__submitted");
const submitButton = document.querySelector("#submit");

let rating_buttonClicked_Or_Not = false;
let ratingValue = 0;

ratingButtons.forEach((button) => {
  button.addEventListener("click", () => {
    
    ratingButtons.forEach((button) => {
      button.classList.add("not-selected");
      button.classList.remove("selected");
    });

    ratingValue = parseInt(button.innerHTML);
    submitting(ratingValue);
    rating_buttonClicked_Or_Not = true;
    button.classList.toggle("selected");
  });
});

function submitting(value) {
  ratingPointDisplay.innerText = value;
  submitButton.addEventListener("click", () => {
    submittedContainer.classList.remove("hidden");
    defaultContainer.classList.add("hidden");
  });
}
