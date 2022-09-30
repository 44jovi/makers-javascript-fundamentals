const Weather = require('./Weather');

describe('Weather', () => {
  it('Returns data fetched by API class', () => {

    const mockApi = {
      fetchWeatherApi: (city, cb) => {
        cb({
          name: 'Fake City',
          id: '0000000'
        });
      }
    }

    const weather = new Weather(mockApi);

    weather.fetch('Fake City');

    result = weather.getWeatherData();

    expect(result.name).toEqual('Fake City');
    expect(result.id).toEqual('0000000');
  });
});
