class Github {

  constructor(api) {
    this.api = api;
    // not actually needed but good for clarity:
    this.repoData = null;
  }
  
  // `fetch` could also return `this.repoData`
  // if we don't want the additional method `getRepoData`
  fetch(repoName) {
    this.api.fetchRepoData(repoName, (repoData) => {
      this.repoData = repoData;
    });
  };

  getRepoData() {
    return this.repoData;
  };
};

module.exports = Github;
