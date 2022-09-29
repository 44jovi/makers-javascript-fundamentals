const Github = require('./Github');

const mockApi = {
  fetchRepoData: (repoName, cb) => {
    cb({
      name: 'apples/apples',
      description: 'apples are nice'        
    });
  }
}

beforeEach(() => {
  github = new Github(mockApi);
});

describe('Github - Unit Testing', () => {
  it('returns JSON parsed data from the GithubApi class', () => {
    github.fetch('apples/apples');
    const result = github.getRepoData();
    expect(result.name).toEqual('apples/apples');
    expect(result.description).toEqual('apples are nice');
  });
});
