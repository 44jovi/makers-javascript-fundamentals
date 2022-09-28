const fizzBuzz = require('./fizzBuzz');

describe('fizzBuzz', () => {
  it('should return Fizz if given 3', () => {
    expect(fizzBuzz(3)).toBe('Fizz');
  });

  it('should return Buzz if given 5', () => {
    expect(fizzBuzz(5)).toBe('Buzz');
  });

  it('should return FizzBuzz if given 15', () => {
    expect(fizzBuzz(15)).toBe('FizzBuzz');
  });
});
