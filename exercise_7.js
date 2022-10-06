const userCardHistory = [1, 2, 3, 4, 5, 6, 7, 8, 9, 6];
totalShoppingCart = 0;

for (let i = 0; i < userCardHistory.length; i++) {
  totalShoppingCart += userCardHistory[i];
}

console.log("There is 20% discount, today is a BLACK FRIDAY!");

let totalCost = totalShoppingCart - (totalShoppingCart * 20) / 100;

if (totalShoppingCart >= 50) {
  console.log(
    `Your total is ${totalCost} $, instead of ${totalShoppingCart} $, you have free shipping`
  );
} else {
  totalShoppingCart += 10;
  console.log(
    `Your total is ${totalCost} $, instead of ${totalShoppingCart} $, with shipping included`
  );
}
