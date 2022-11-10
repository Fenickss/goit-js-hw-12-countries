import countriesCartTpl from "./teamplate/teamplate-card";
import _debounce from "lodash.debounce";
import API from "./js/api-sarvice";
import getRefs from "./js/get-refs";

const refs = getRefs();

// const debounceOnInput = _debounce(onInputChange, 500);
refs.searchForm.addEventListener("input", onInputChange);

// Функция поиска стран с выводом на страницу через input
function onInputChange(event) {
  const form = event.currentTarget;
  const searchQuery = form.elements.name.value;

  API.fetchCountrisByName(searchQuery)
    .then(rendercountriesCart)
    .catch((error) => console.log(error));
}

// .then(rendercountriesCart)
// .catch((error) => console.log(error));

// Рендерим разметку всех деталей на страницу
function rendercountriesCart(countries) {
  const markup = countriesCartTpl(countries);
  refs.out.innerHTML = markup;
}
