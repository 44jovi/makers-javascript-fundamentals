const searchCandies = (prefix, maxPrice) => {
  
  const candies = [
    { name: 'Aero', price: 1.99 },
    { name: 'Skitties', price: 2.99 },
    { name: 'Mars', price: 1.49 },
    { name: 'Maltesers', price: 3.49 },
    { name: 'Skittles', price: 1.49 },
    { name: 'Starburst', price: 5.99 },
    { name: 'Ricola', price: 1.99 },
    { name: 'Polkagris', price: 5.99 },
    { name: 'Pastila', price: 4.99 },
    { name: 'Mentos', price: 8.99 },
    { name: 'Raffaello', price: 7.99 },
    { name: 'Gummi bears', price: 10.99 },
    { name: 'Fraise Tagada', price: 5.99 }
  ];

  return candies.filter(candy => 
    candy.price <= maxPrice && candy.name.toLowerCase().includes(prefix.toLowerCase())
    ).map(candy => candy.name);
};

module.exports = searchCandies;

// more readable:
// const result = candies.filter(candy =>(
//   candy.price <= maxPrice && candy.name.toLowerCase().includes(prefix.toLowerCase())
//   ));

// return result.map(candy => (candy.name));

// ideas for using regex to match only the prefix of the string
// const regex = new RegExp(`^${search}`, 'i');
// return candies.filter(candy => regex.test(candy.name) && candy.price <= maxPrice);