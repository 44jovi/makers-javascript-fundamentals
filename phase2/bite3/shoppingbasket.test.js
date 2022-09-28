const ShoppingBasket = require('./shoppingbasket');

describe('ShoppingBasket', () => {
  it('returns total price when basket is empty', () => {
    const basket = new ShoppingBasket();
    expect(basket.getTotalPrice()).toEqual(0);    
  });

  it('returns total price when one item is added', () => {
    const basket = new ShoppingBasket();

    const fakeCandy1 = {
      getPrice: () => 3.99
    };

    basket.addItem(fakeCandy1);

    expect(basket.getTotalPrice()).toEqual(3.99);
  });

  it('returns total price when one item is added', () => {
    const basket = new ShoppingBasket();

    const fakeCandy1 = {
      getPrice: () => 3.99
    };

    const fakeCandy2 = {
      getPrice: () => 6.99
    };

    basket.addItem(fakeCandy1);
    basket.addItem(fakeCandy2);

    expect(basket.getTotalPrice()).toEqual(10.98);
  });

  // experimenting with sub-describe block
  describe('#getTotalPrice returns discounted price', () => {
    it('after #applyDiscount', () => {
      const basket = new ShoppingBasket;

      const fakeCandy1 = {
        getPrice: () => 3.99
      };

      basket.addItem(fakeCandy1);
      basket.applyDiscount(1);

      expect(basket.getTotalPrice()).toEqual(2.99);
    });
  });
});
