const userCardHistory = [1, 2, 3, 4, 5, 6, 7, 8, 9];
totalShoppingCart = 0;

for (let i = 0; i < userCardHistory.length; i++) {
  totalShoppingCart += userCardHistory[i];
}

if (totalShoppingCart >= 50) {
  console.log(`Your total is ${totalShoppingCart} $, you have free shipping`);
} else {
  totalShoppingCart += 10;
  console.log(`Your total is ${totalShoppingCart} $, with shipping included`);
}
