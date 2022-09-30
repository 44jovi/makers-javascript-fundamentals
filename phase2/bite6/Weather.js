const WeatherApi = require('./WeatherApi');

class Weather {
  constructor(api) {
    this.api = api;
  }

  fetch(city) {
    this.api.fetchWeatherApi(city, (apiData) => {
      this.weatherData = apiData;
    });
  }

  getWeatherData() {
    return this.weatherData;
  }
};

module.exports = Weather;
