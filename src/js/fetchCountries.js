fetch(`https://restcountries.com/v2/all`)
  .then((response) => {
    return response.json();
  })
  .then((name) => {
    console.log(name);
  })
  .catch((error) => {
    console.log(error);
  });
