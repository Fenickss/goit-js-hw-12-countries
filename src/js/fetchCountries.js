import markupTeamplateCard from "../teamplate/teamplate-card.hbs";

fetch(`https://restcountries.com/v2/all`)
  .then((response) => {
    return response.json();
  })
  .then((name) => {
    // console.log(name);
    const markup = markupTeamplateCard(name);
    // console.log(markup);
  })
  .catch((error) => {
    console.log(error);
  });
