const BASE_URL = "https://restcountries.com";

function fetchCountrisByName(coutriesByName) {
  return fetch(`${BASE_URL}/v2/name/${coutriesByName}`).then((response) => {
    return response.json();
  });
  // .then(rendercountriesCart)
  // .catch((error) => console.log(error));
}

export default { fetchCountrisByName };

// fetchCountrisByName("Af")
//   .then(rendercountriesCart)
//   .catch((error) => console.log(error));
