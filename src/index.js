// import API from "./js/fetchCountries";
import _debounce from "lodash.debounce";

let refs = {
  input: document.querySelector(".js-countrySearch"),
  out: document.querySelector(".outSearch"),
};

const debounceOnInput = _debounce(onInputChange, 500);
refs.input.addEventListener("input", debounceOnInput);

fetch(`https://restcountries.com/v2/all`)
  .then((response) => {
    return response.json();
  })
  .then((name) => {
    return onInputChange(name); /* ???????????????????????????????????????? */
  })
  .catch((error) => {
    console.log(error);
  });

//1. Достучаться до input value и вывести в out
// 2.попробывать подключть вывод из fetch в input
function onInputChange(event) {
  refs.out.textContent =
    event.name; /* ???????????????????????????????????????? */
  console.log(event);
}

// Подключаемся к промис
function renderCountryCard(country) {
  const markup = countryCardTpl(country);
  refs.input.innerHTML = API;

  console.log();
}

// НЕ ЗАКОНЧЕННЫЙ СКРИПТ==============================================================================================================================================
