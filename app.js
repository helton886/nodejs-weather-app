const geoLocation = require('./utils/geolocation.js');

// request({ url: darksky, json: true }, (error, response) => {
//   // error handler for low-lvl errors
//   if (error) {
//     console.log('Unable to connect to the weather service!');
//     // error handler for wrong matching
//   } else if (response.body.error) {
//     console.log('Unable to find location!');
//   } else {
//     const currently = response.body.currently;
//     console.log(
//       `It is currently ${currently.temperature} degrees out. There is a ${currently.precipProbability} chance of rain.`
//     );
//   }
// });

geoLocation('Recife', (error, data) => {
  console.log('error', error);
  console.log('Data', data);
});
