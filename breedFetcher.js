const args = process.argv.slice(2);
const request = require('request');
const url = `https://api.thecatapi.com/v1/breeds/search?q=${args}`;


request(url, (error, response, body) => {
  const data = JSON.parse(body);
  if (data.length === 0) {
    console.log("No such kitty");
  } else {
    console.log(data[0]);
  }
});
