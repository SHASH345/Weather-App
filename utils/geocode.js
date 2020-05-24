const request = require("request");

const geoCode = (address, callback) => {
  const apikey = "8xA7TG6yn1TK57eaFqBgXaZzgvlNoYiO";
  const LocationKeyURL = `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=${apikey}&q=${address}`;

  request({ url: LocationKeyURL, json: true }, (error, { body }) => {
    if (error) callback("Unable to connect AccuWheather Service...", undefined);
    else if (body.length === 0) callback("Invalid Location...", undefined);
    else {
      callback(undefined, {
        locationKeyValue: body[0].Key,
        locationPlace:
          body[0].LocalizedName +
          ", " +
          body[0].AdministrativeArea.LocalizedName +
          ", " +
          body[0].Country.LocalizedName,
      });
    }
  });
};

module.exports = geoCode;
