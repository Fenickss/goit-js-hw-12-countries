import API from "./js/fetchCountries";
import _debounce from "lodash.debounce";

let refs = {
  input: document.querySelector(".js-countrySearch"),
  out: document.querySelector(".outSearch"),
};

const debounceOnInput = _debounce(onInputChange, 500);
refs.input.addEventListener("input", debounceOnInput);

let countries;

export default function initialize(CountriesData) {
  countries = CountriesData;
  let options = "";
  countries.forEach(
    (country) => (options += `<input value=${country.alpha3Code}`)
  );
  refs.out.textContent = options;
  console.log(options);
}

// Функция поиска стран с выводом на страницу
function onInputChange(event) {
  initialize(options);
  refs.out.textContent = event.target.value;
  console.log(event);
}
onInputChange();

// Рендерим разметку всех деталей на страницу
function renderCountriesList(countries) {
  const markup = countriesListTpl(countries);
  cardContainer.innerHTML = markup;
}

// НЕ ЗАКОНЧЕННЫЙ СКРИПТ==============================================================================================================================================
