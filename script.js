"use strict";

const emailInput = document.querySelector(".form__input");
const submitButton = document.querySelector(".form__submit");

const formWrapper = document.querySelector(".form__wrapper");
const errorIcon = document.querySelector(".error-icon");
const message = document.querySelector(".message");

let feedbackTimeout;

const successMessage = () => {
  message.innerHTML = `<span>Your email has been sent</span>`;
  message.style.display = "block";
  message.style.color = "green";
};

const errorMessage = () => {
  message.innerHTML = `<span>Please provide a valid email</span>`;
  message.style.display = "block";
  message.style.color = "#f96262";
};

const clearMessage = () => {
  message.style.display = "none";
  message.innerHTML = "";
};

const submitForm = (e) => {
  e.preventDefault();
  clearTimeout(feedbackTimeout);
  if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(emailInput.value)) {
    emailInput.value = "";
    formWrapper.classList.add("form__wrapper--success");
    successMessage();
    setTimeout(() => {
      formWrapper.classList.remove("form__wrapper--success");
      clearMessage();
    }, 2000);
  } else {
    formWrapper.classList.add("form__wrapper--error");
    errorIcon.classList.add("error-icon-show");
    emailInput.setAttribute("aria-invalid", "true");
    errorMessage();
    setTimeout(() => {
      formWrapper.classList.remove("form__wrapper--error");
      errorIcon.classList.remove("error-icon-show");
      emailInput.removeAttribute("aria-invalid");
      clearMessage();
    }, 2000);
  }
};

submitButton.addEventListener("click", submitForm);
