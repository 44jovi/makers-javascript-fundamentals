const lowercaseMessage = (message) => {
 return message.toLowerCase();
}

// notice the function and parameter names and order do not matter:
const apples = (oranges, bananas) => {
  return bananas(oranges);
}

console.log(apples('CAT', lowercaseMessage));
// same as just calling the first function:
console.log(lowercaseMessage('DOG'));
