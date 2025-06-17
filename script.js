"use strict";

const emailInput = document.querySelector(".form__input");
const submitButton = document.querySelector(".form__submit");

const formWrapper = document.querySelector(".form__wrapper");
const errorIcon = document.querySelector(".error-icon");
const message = document.querySelector(".message");

let errorTimeout;

const submitForm = (e) => {
  e.preventDefault();
  if (/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(emailInput.value)) {
    emailInput.value = "";
    message.innerHTML = `<span>Your email has been sent</span>`;
    message.style.display = "block";
    message.style.color = "green";
    formWrapper.classList.add("form__wrapper--success");
    setTimeout(() => {
      formWrapper.classList.remove("form__wrapper--success");
      message.style.display = "none";
    }, 2000);
  } else {
    formWrapper.classList.add("form__wrapper--error");
    errorIcon.classList.add("error-icon-show");
    message.innerHTML = `<span>Please provide a valid email</span>`;
    message.style.display = "block";
    message.style.color = "#f96262";
    emailInput.setAttribute("aria-invalid", "true");
    setTimeout(() => {
      formWrapper.classList.remove("form__wrapper--error");
      errorIcon.classList.remove("error-icon-show");
      message.style.display = "none";
      emailInput.removeAttribute("aria-invalid");
    }, 2000);
  }
};

submitButton.addEventListener("click", submitForm);
