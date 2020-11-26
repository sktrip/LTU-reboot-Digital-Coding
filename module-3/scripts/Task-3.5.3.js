let shoppingCart = [
    {
      name:"loaf of bread",
      type:"food",
      quantity:1,
      price:.85
    },
    { 
      name:"multipack beans",
      type:"food",
      quantity:1,
      price:1
  },
  { 
    name:"mushrooms",
    type:"food",
    quantity:10,
    price:.1
  },
  {
    name:"can of beer",
    type:"alcohol",
    quantity:4,
    price:1.1
  },
  {
    name:"prosecco",
    type:"alcohol",
    quantity:1,
    price:8.99
  },
  {
    name:"steak",
    type:"food",
    quantity:2,
    price:3.99
  },
  {
    name:"blue cheese",
    type:"food",
    quantity:1,
    price:2.99
  },
  {
    name:"candles",
    type:"home",
    quantity:3,
    price:1.99
  },
  { 
    name:"cheesecake",
    type:"food",
    quantity:1,
    price:4.99
  },
  { 
    name:"onions",
    type:"food",
    quantity:3,
    price:.4
  }];

  function shoppingCartTotalPrice( arr, discountAmount, type ) {
    let totalPrice = 0;
    for(i=0; i<arr.length; i++) {
        if(arr[i].type== type || type == 'any') {

        totalPrice += ((arr[i].quantity * arr[i].price)-((arr[i].quantity * arr[i].price)*(discountAmount/100)));
        }
      else {
        totalPrice += (arr[i].quantity * arr[i].price);
      }
         
    }
    return totalPrice.toFixed(2);
}
    var totalCost = shoppingCartTotalPrice(shoppingCart, 20, 'any');
    console.log('Total cost of the shopping cart items is : '+totalCost);