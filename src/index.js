import "./js/fetchCountries";
import _debounce from "lodash.debounce";
import featchCount from "./js/fetchCountries";

let refs = {
  input: document.querySelector(".js-countrySearch"),
  out: document.querySelector(".outSearch"),
};

const debounceOnInput = _debounce(onInputChange, 1000);
refs.input.addEventListener("input", debounceOnInput);

// Достучаться до input value и вывести в out
function onInputChange(event) {
  refs.out.textContent = event.target.value;
}
