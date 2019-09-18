const request = require('request');
const acessToken = require('./acesstoken.js');

const geoLocation = (adress, callback) => {
  const url = acessToken.mapbox(adress);
  request({ url, json: true }, (error, { body }) => {
    // error handler for low-lvl errors
    if (error) {
      callback('Unable to connect to location services!', undefined);
      // error handler for wrong matching
    } else if (body.features.length === 0) {
      callback('Unable to find location!', undefined);
    } else {
      // everything went well.
      const feature = body.features[0];
      callback(undefined, {
        latitude: feature.center[0],
        longitude: feature.center[1],
        location: feature.place_name,
      });
    }
  });
};

module.exports = geoLocation;
