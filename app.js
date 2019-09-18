const geoLocation = require('./utils/geolocation.js');
const forecast = require('./utils/forecast.js');

if (process.argv[2]) {
  geoLocation(process.argv[2], (error, data) => {
    if (error) {
      return console.log(error);
    }
    forecast(data.latitude, data.longitude, (error, foreCastData) => {
      if (error) {
        return console.log(error);
      }
      console.log(data.location);
      console.log(foreCastData);
    });
  });
} else {
  console.log('Please, provide an address.');
}
