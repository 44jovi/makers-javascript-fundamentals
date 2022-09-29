const got = require('got');

const fetchRepositoryInfo = (repoName, cb) => {
  
  const url = 'https://api.github.com/repos/' + repoName;

  got(url)
    .then((response) => {
      cb(JSON.parse(response.body));
    });
};

fetchRepositoryInfo('sinatra/sinatra', console.log);
fetchRepositoryInfo('makersacademy/bowling-challenge', console.log);

// this also works:
// fetchRepositoryInfo('sinatra/sinatra', (response) => {
//   console.log(response);
// });

module.exports = fetchRepositoryInfo;
