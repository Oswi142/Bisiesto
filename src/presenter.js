import esBisiesto from "./bisiesto";

const year = document.querySelector("#year");
const form = document.querySelector("#bisiesto-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const Ayear = Number.parseInt(year.value);

  div.innerHTML = "<p>" + esBisiesto(Ayear) + "</p>";
});
