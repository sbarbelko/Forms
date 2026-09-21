"use strict";

const results = [];

const INPUTS_REG_EXP = {
  firstName: /^[A-Z][a-z]{1,19}$/,
  surname: /^[A-Z][a-z]{1,19}$/,
  email: /^(?=.{4,}).*@.*$/,
  phone: /^0\d{2}$/,
  phone1: /^\d{3}$/,
  phone2: /^\d{4}$/,
};
const inputs = document.querySelectorAll("input");
inputs.forEach((i) => i.addEventListener("input", inputHandler));

console.log("inputs", inputs);

function inputHandler() {
  if (INPUTS_REG_EXP[this.name].test(this.value)) {
    this.classList.add("valid");
    this.classList.remove("invalid");
  } else {
    this.classList.add("invalid");
    this.classList.remove("valid");
  }
}

const contactForm = document.querySelector(".contactForm");
contactForm.addEventListener("submit", submitHandler);

function submitHandler(e) {
  e.preventDefault();

  const formEl = e.target.elements;
  const phoneFull = `+38${formEl.phone.value}${formEl.phone1.value}${formEl.phone2.value}`;
  const mess = formEl.mess.value.replace(/\s+/g, " ").replace(/^\s|\s$/g, "");

  const result = {
    name: `${formEl.firstName.value} ${formEl.surname.value}`,
    phone: phoneFull,
    email: `${formEl.email.value}`,
    subject: `${formEl.messSubj.value}`,
    message: `${mess}`,
  };

  results.push(result);
}

console.log("results", results);
