"use strict";

const INPUTS_REG_EXP = {
  firstName: /^[A-Z][a-z]{1,19}$/,
  surname: /^[A-Z][a-z]{1,19}$/,
  email: /^(?=.{4,}).*@.*$/,
  phone: /^0\d{2}$/,
  phone1: /^\d{3}$/,
  phone2: /^\d{4}$/,
};
const inputs = document.querySelectorAll("input");
console.log(INPUTS_REG_EXP);
inputs.forEach((i) => i.addEventListener("input", inputHandler));

console.log("inputs", inputs);

function inputHandler() {
  console.log(this.value);
  if (INPUTS_REG_EXP[this.name].test(this.value)) {
    this.classList.add("valid");
    this.classList.remove("invalid");
  } else {
    this.classList.add("invalid");
    this.classList.remove("valid");
  }
}
