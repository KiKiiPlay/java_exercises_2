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
  carsForRent.push(allCars[propertyName + i].licensePlate); //getting access to the 2-nd level licensePlate
}
