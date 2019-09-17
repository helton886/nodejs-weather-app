const request = require('request');
const apis = require('./apis.js');

const darksky = apis.darksky;
const mapbox = apis.mapbox;

request({ url: darksky, json: true }, (error, response) => {
  // error handler for low-lvl errors
  if (error) {
    console.log('Unable to connect to the weather service!');
    // error handler for wrong matching
  } else if (response.body.error) {
    console.log('Unable to find location!');
  } else {
    const currently = response.body.currently;
    console.log(
      `It is currently ${currently.temperature} degrees out. There is a ${currently.precipProbability} chance of rain.`
    );
  }
});

request({ url: mapbox, json: true }, (error, response) => {
  // error handler for low-lvl errors
  if (error) {
    console.log('Unable to connect to the weather service!');
    // error handler for wrong matching
  } else if (response.body.features.length === 0) {
    console.log('Unable to find location!');
  } else {
    const feature = response.body.features[0];
    const longitude = feature.center[0];
    const latitude = feature.center[1];
    console.log(`longitude: ${longitude}\nlatitude: ${latitude}`);
  }
});
