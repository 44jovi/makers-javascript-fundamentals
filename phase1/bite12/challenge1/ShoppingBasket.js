class ShoppingBasket {

  constructor() {
    this.basket = [];
  };

  addItem(candy) {
    this.basket.push(candy);
  };

  getTotalPrice() {
    return this.basket.reduce((previousValue, candy) =>  previousValue + candy.price, 0);
  };
}

module.exports = ShoppingBasket;

// notes:
// [1,2,3].reduce((prevVal, currVal) => prevVal + currVal, 0);

// original code using map
// getTotalPrice() {
//   const pricesOnly = this.basket.map(candy =>
//     candy.price
//   );
//   return priceOnly.reduce((previousValue, currentValue) =>  previousValue + currentValue, 0);
// };