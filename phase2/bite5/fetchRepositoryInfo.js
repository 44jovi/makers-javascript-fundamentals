const got = require('got');

const fetchRepositoryInfo = (urlSuffix, callback) => {
  
  const url = 'https://api.github.com/repos/' + urlSuffix;

  got(url)
    .then((response) => {
      callback(JSON.parse(response.body));
    });
};

fetchRepositoryInfo('sinatra/sinatra', (response) => {
  console.log(response);
});

fetchRepositoryInfo('makersacademy/bowling-challenge', (response) => {
  console.log(response);
});

module.exports = fetchRepositoryInfo;
