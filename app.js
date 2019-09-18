const geoLocation = require('./utils/geolocation.js');
const forecast = require('./utils/forecast.js');

if (process.argv[2]) {
  geoLocation(process.argv[2], (error, { latitude, longitude, location }) => {
    if (error) {
      return console.log(error);
    }
    // prettier-ignore
    forecast(latitude, longitude, (error, { temperature, precipProbability, summary }) => {
        if (error) {
          return console.log(error);
        }
        console.log(location);
        console.log(temperature);
        console.log(precipProbability);
        console.log(summary);
      }
    );
  });
} else {
  console.log('Please, provide an address.');
}
