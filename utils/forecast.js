const acessToken = require('./acesstoken.js');
const request = require('request');

const foreCast = (latitude, longitude, callback) => {
  const url = acessToken.darksky(latitude, longitude);
  request({ url, json: true }, (error, { body }) => {
    // error handler for low-lvl errors
    if (error) {
      callback('Unable to connect to location forecast service!', undefined);
    } else if (body.error) {
      callback('Unable to find the location! Try another one', undefined);
    } else {
      const currently = body.currently;
      callback(undefined, {
        temperature: currently.temperature,
        summary: currently.summary,
        precipProbability: currently.precipProbability,
      });
    }
  });
};

module.exports = foreCast;
