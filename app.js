const geoCode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const address = process.argv[2];

// if (!address) console.log("Please input your address");
// else {
//   geoCode(address, (error, geoCodeData) => {
//     if (error) console.log(error);
//     forecast(geoCodeData.locationKeyValue, (error, forecastData) => {
//       if (error) console.log("ERROR", error);
//       console.log(geoCodeData.locationPlace);
//       console.log(forecastData);
//     });
//   });
// }

if (!address) console.log("Please input your address");
else {
  geoCode(address, (error, { locationKeyValue, locationPlace }) => {
    if (error) console.log(error);
    forecast(locationKeyValue, (error, forecastData) => {
      if (error) console.log("ERROR", error);
      console.log(locationPlace);
      console.log(forecastData);
    });
  });
}
