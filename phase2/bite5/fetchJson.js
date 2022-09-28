const got = require('got');

const fetchJson = (url, callback) => {
  got(url)
    .then((response) => {
        callback(JSON.parse(response.body));
        // without JSON parsing:
        // callback(response.body);
    });
};

const url1 = 'https://jsonplaceholder.typicode.com/todos';
const url2 = 'https://api.github.com/repos/sinatra/sinatra';

fetchJson(url1, (response) => {
  console.log(response);
});

fetchJson(url2, (response) => {
  console.log(response);
});

module.exports = fetchJson;
