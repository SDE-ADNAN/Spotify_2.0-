const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "6f0b734d66msh4977546389c9faep186980jsn9c4748d42daa",
    "X-RapidAPI-Host": "shazam-core.p.rapidapi.com",
  },
};

fetch("https://shazam-core.p.rapidapi.com/v1/charts/world", options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));
