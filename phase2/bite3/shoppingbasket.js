class ShoppingBasket {

  constructor() {
    this.items = [];
    this.discount = 0;
  }

  addItem(candy) {
    this.items.push(candy);
  };

  applyDiscount(discount) {
    this.discount = discount;
  }

  getTotalPrice() {
    let total = 0;
    this.items.forEach((item) => {
      total += item.getPrice();
      // total += item.price;
    });
    return total - this.discount;
  };
};

module.exports = ShoppingBasket;
