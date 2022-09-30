const got = require('got');
const apiKey = require('./apiKey');

class WeatherApi {

  fetchWeatherApi(city, cb) {
    
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`

    got(apiUrl)
      .then((weatherData) => {
        cb(JSON.parse(weatherData.body));
      });
  };
};

// // live test:
// const api = new WeatherApi;

// api.fetchWeatherApi('Manchester', (data) => {
//   console.log(data);
// });

module.exports = WeatherApi;
