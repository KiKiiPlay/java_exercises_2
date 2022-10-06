const carsForSale = [];

const car1 = {
  brand: "BMW",
  model: "X6 2022",
  licensePlate: "AO0019BC",
};

const car2 = {
  brand: "Mercedes",
  model: "GLS",
  licensePlate: "AO0012BC",
};

const car3 = {
  brand: "Volkswagen",
  model: "Golf",
  licensePlate: "AO0011BC",
};

carsForSale.push(car1);
carsForSale.push(car2);
carsForSale.push(car3);

for (let i = 0; i < carsForSale.length; i++) {
  console.log(carsForSale[i]);
}
