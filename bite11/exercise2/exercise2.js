const generateMessages = (namesArray) => {
  return namesArray.map(name => 
    `Hi ${name}! 50% off our best candies for you today!`
    );
};

const names = ['Anna', 'Laura', 'Josh', 'Min', 'Karla'];

console.log(generateMessages(names));
