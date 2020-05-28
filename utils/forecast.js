const request = require("request");

const forecast = (locationKeyValue, callback) => {
  const apikey = "8xA7TG6yn1TK57eaFqBgXaZzgvlNoYiO";
  const wheatherURL = `http://dataservice.accuweather.com/forecasts/v1/daily/1day/${locationKeyValue}?apikey=${apikey}`;

  request({ url: wheatherURL, json: true }, (error, { body }) => {
    if (error) callback("Unable to connect AccuWheather Service...", undefined);
    else if (body.Code === "400") callback("Invalid Location...", undefined);
    else {
      callback(undefined, {
        data: body.Headline.Text,
      });
    }
  });
};

module.exports = forecast;
