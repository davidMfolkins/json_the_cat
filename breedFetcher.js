const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  
  
  request(url, (error, response, body) => {

    const data = JSON.parse(body);
    if (data.length === 0) {
      callback("No such kitty", null);
    } else {
      callback(null, data[0].description);
    }
  });
};

module.exports = { fetchBreedDescription };