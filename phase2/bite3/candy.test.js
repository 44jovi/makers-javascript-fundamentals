const Candy = require('./candy')

describe('Candy', () => {
  it('returns name and price of a candy', () => {
    
    const candy = new Candy('Mars', 4.99);

    expect(candy.getName()).toEqual('Mars');
    expect(candy.getName()).toBe('Mars');

    expect(candy.getPrice()).toEqual(4.99);
  });
});
