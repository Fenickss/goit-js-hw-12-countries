import "./js/fetchCountries";

import featchCount from "./js/fetchCountries";

let refs = {
  input: document.querySelector(".js-countrySearch"),
  out: document.querySelector(".outSearch"),
};

refs.input.addEventListener("input", onInputChange);

// Достучаться до input value и вывести в out
function onInputChange(event) {
  console.dir(event.currentTarget.value);
}
