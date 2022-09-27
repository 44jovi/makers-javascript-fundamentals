const searchCandies = require('./searchCandies');

describe('searchCandies', () => {
  
  it('returns correct result when given Ma and 10', () => {
    expect(searchCandies('Ma', 10)).toEqual(['Mars', 'Maltesers']);
  });

  it('returns correct result when given ma (all lowercase) and 10', () => {
    expect(searchCandies('Ma', 10)).toEqual(['Mars', 'Maltesers']);
  });

  it('returns correct result when given Ma and 2', () => {
    expect(searchCandies('Ma', 2)).toEqual(['Mars']);
  });

  it('returns correct result when given S and 10', () => {
    expect(searchCandies(['S', 10]));
  });

  it('returns correct result when given S and 4', () => {
    expect(searchCandies(['S', 4]));
  });
});
