const got = require('got');
const apiKey = require('./apiKey');
const city = 'Newcastle';
const apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;

const fetchData = (cb) => {
  got(apiUrl).then((data) => {
    cb(JSON.parse(data.body));
  });
};

// using 'apples' as arg name to emphasise
// it is separate to the 'data' arg in `fetchData`
fetchData((apples) => {
  console.log(apples.name);
  console.log(apples.main.temp);
  console.log(apples.sys.country);
  console.log(apples.id);
});
