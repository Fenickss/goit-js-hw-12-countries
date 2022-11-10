import initialize from "../index.js";
fetch(`https://restcountries.com/v2/all`)
  .then((response) => response.json())
  .then((data) => initialize(data))
  .catch((error) => console.log(error));
