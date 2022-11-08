import API from "./js/fetchCountries";
import _debounce from "lodash.debounce";
console.log(API);
let refs = {
  input: document.querySelector(".js-countrySearch"),
  out: document.querySelector(".outSearch"),
};

const debounceOnInput = _debounce(onInputChange, 500);
refs.input.addEventListener("input", debounceOnInput);

// Достучаться до input value и вывести в out
function onInputChange(event) {
  refs.out.textContent = event.target.value;
}

// Подключаемся к промис
function renderCountryCard(country) {
  const markup = countryCardTpl(country);
  cardContainer.innerHTML = markup;
}
console.log(renderCountryCard());

console.log(API);
