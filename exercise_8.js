const car = {
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
console.log(car1, "\n", car2, "\n", car3, "\n", car4, "\n", car5, "\n");
