const fizzBuzz = (n) => {
  if (n % 3 === 0 && n % 5 === 0) {
    return 'FizzBuzz';
  } else if (n % 3 === 0) {
    return 'Fizz';
  } else if (n % 5 === 0) {
    return 'Buzz';
  } else {
    return n;
  }
}

console.log(fizzBuzz(3));
console.log(fizzBuzz(5));
console.log(fizzBuzz(8));
console.log(fizzBuzz(15));
console.log(fizzBuzz(18));
console.log(fizzBuzz(20));
