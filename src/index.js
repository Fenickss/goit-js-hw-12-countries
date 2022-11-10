import "./js/fetchCountries";
import countriesCartTpl from "./teamplate/teamplate-card";
import _debounce from "lodash.debounce";

let refs = {
  searchForm: document.querySelector(".js-countrySearch"),
  out: document.querySelector(".outSearch"),
};

const debounceOnInput = _debounce(onInputChange, 500);
refs.searchForm.addEventListener("input", debounceOnInput);

// Функция поиска стран с выводом на страницу через input
function onInputChange(event) {
  // const form = event.currentTarget;
  // const searchQuery = form.elements.query.value;
}
onInputChange();
fetchCountrisByName("Af")
  .then(rendercountriesCart)
  .catch((error) => console.log(error));

function fetchCountrisByName(coutriesByName) {
  return fetch(`https://restcountries.com/v2/name/${coutriesByName}`).then(
    (response) => {
      return response.json();
    }
  );
  // .then(rendercountriesCart)
  // .catch((error) => console.log(error));
}

// Рендерим разметку всех деталей на страницу
function rendercountriesCart(countries) {
  const markup = countriesCartTpl(countries);
  refs.out.innerHTML = markup;
}
// НЕ ЗАКОНЧЕННЫЙ СКРИПТ==============================================================================================================================================
