/*
ASSIGNMENT RULES
- All the answers must be written in JavaScript
- You can ask for help, reach the Teaching Assistants if needed
- You can Google / use StackOverflow BUT only when you think you need something we didn't cover during lessons yet
- You can test your code in a separate file or de-commenting the single exercises in this one.
- You can use the bash terminal, the VSCode terminal or the one embedded in your Operating System if you're using macOS or Linux.
- The solution must be available for the tutors by the end of the day (5PM CET)
*/

/* EXERCISE 1
 Create a variable and assign to it an array containing the first 5 positive numbers.
*/

/* const array = [55, 6, 32, 589, 6];
let arrayHolder = array;

console.log(arrayHolder); */

/* EXERCISE 2
 Create a variable and assign to it an object containing your name, surname, email address and age.
*/

/* let myInfo = {
  name: "Kiril",
  surname: "Vandzsurak",
  email: "kiril.wandzuerak@gmail.com",
  age: 18,
};

console.log(myInfo); */

/* EXERCISE 3
 Add to the previously created object a property with a boolean value to rappresent wheter you have or not a driving license.
*/

/* let myInfo = {
  name: "Kiril",
  surname: "Vandzsurak",
  email: "kiril.wandzuerak@gmail.com",
  age: 18,
};

myInfo.haveDrivingLicense = true;

console.log(myInfo); */

/* EXERCISE 4
 Remove from the previously created object the age property.
*/

/* let myInfo = {
  name: "Kiril",
  surname: "Vandzsurak",
  email: "kiril.wandzuerak@gmail.com",
  age: 18,
};

delete myInfo.age;
console.log(myInfo); */

/* EXERCISE 5
 Create a second object with another name, surname, email address and verify that this object has a different email address than the previous one.
*/

/* let myInfo = {
  name: "Kiril",
  surname: "Vandzsurak",
  email: "kiril.wandzuerak@gmail.com",
  age: 18,
};

let myFriendsInfo = {
  name: "Cassidy",
  surname: "O'Connell",
  email: "blablabla@gmail.org",
  age: 18,
};

if (myInfo.email !== myFriendsInfo.email) {
  console.log("Emails are different!!");
} else {
  console.log("They are the same");
} */

/* EXERCISE 6
 You are working on an e-commerce website. In the variable totalShoppingCart you are storing the total amount spent by the current user.
 Currently you have a promotion: if the customer's shopping cart total is more than 50, the user is eligible for free shipping (otherwise it costs 10).
 Write an algorithm that calculates the total cost to charge the user with.
*/

/* const userCardHistory = [1, 2, 3, 4, 5, 6, 7, 8, 9];
totalShoppingCart = 0;

for (let i = 0; i < userCardHistory.length; i++) {
  totalShoppingCart += userCardHistory[i];
}

if (totalShoppingCart >= 50) {
  console.log(`Your total is ${totalShoppingCart} $, you have free shipping`);
} else {
  totalShoppingCart += 10;
  console.log(`Your total is ${totalShoppingCart} $, with shipping included`);
} */

/* EXERCISE 7
 You are working on an e-commerce website. Today is Black Friday and everything has a 20% discount at the end of the purchase.
 Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalCost.
*/

/* const userCardHistory = [1, 2, 3, 4, 5, 6, 7, 8, 9, 6];
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
} */

/* EXERCISE 8
 Create a variable and assign to it an object representing a car, with properties like brand, model and licensePlate.
 Then clone it 5 times, and change the licensePlate for each cloned car without affecting the original one.
*/

/* const car = {
  brand: "BMW",
  model: "X6 2022",
  licensePlate: "AO0019BC",
};

const car1 = Object.assign({}, car);
const car2 = Object.assign({}, car);
const car3 = Object.assign({}, car);
const car4 = Object.assign({}, car);
const car5 = Object.assign({}, car);

car1.licensePlate = "AO8929KA";
car2.licensePlate = "AO7856EA";
car3.licensePlate = "AO1111BB";
car4.licensePlate = "AO1352AO";
car5.licensePlate = "AO7500OA";

console.log(car);
console.log(car1, "\n", car2, "\n", car3, "\n", car4, "\n", car5, "\n"); */

/* EXERCISE 9
 Create a variable called carsForRent and assign to it an array containing all the cars from the previous exercise.
*/

/* const car = {
  brand: "BMW",
  model: "X6 2022",
  licensePlate: "AO0019BC",
};

const car1 = Object.assign({}, car);
const car2 = Object.assign({}, car);
const car3 = Object.assign({}, car);
const car4 = Object.assign({}, car);
const car5 = Object.assign({}, car);

car1.licensePlate = "AO8929KA";
car2.licensePlate = "AO7856EA";
car3.licensePlate = "AO1111BB";
car4.licensePlate = "AO1352AO";
car5.licensePlate = "AO7500OA";

const allCars = {
  car1,
  car2,
  car3,
  car4,
  car5,
};

const propertyName = "car";
let carsForRent = [];

for (let i = 1; i <= 5; i++) {
  carsForRent.push(allCars[propertyName + i]); //getting access to the every car
}

console.log(carsForRent); */

/* EXERCISE 10
 Remove the first and the last car from the carsForRent array.
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 11
 Print to the console the type of the car variable you created before, as well as the types of its licensePlate and brand properties.
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 12
 Create a new variable called carsForSale assigning to it an empty array, and then insert 3 cars into it.
 Create a new variable called totalCars and assign to it the total number of cars present in the carsForSale and carsForRent arrays.
*/

/* WRITE YOUR ANSWER HERE */

/* EXERCISE 13
 Using a loop, print to the console all the data for each car in the carsForSale array.
*/

/* WRITE YOUR ANSWER HERE */
