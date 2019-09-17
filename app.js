const geoLocation = require('./utils/geolocation.js');
const forecast = require('./utils/forecast.js');


geoLocation('Recife', (error, data) => {
  console.log('error', error);
  console.log('Data', data);
});

forecast(-34.8782, -8.0642, (error, data) => {
  console.log('Error', error)
  console.log('Data', data)
})
