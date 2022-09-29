const got = require('got');

class GithubApi {
  fetchRepoData(repoName, cb) {
        const url = `https://api.github.com/repos/${repoName}`;
    
    got(url).then((repoData) => {
      cb(JSON.parse(repoData.body));
    });
  };
};

// // for testing outside of jest:
// const api = new GithubApi;

// api.fetchRepoData('sinatra/sinatra', console.log);

// // this also works:
// api.fetchRepositoryData('sinatra/sinatra', (repoData) => {
//   console.log(repoData);
// });

module.exports = GithubApi;
