const { CarStore } = require("../Database/cars-stock");

/*Array.from({ length: 3 }, ...): Creates an array with three elements.
String.fromCharCode(...): Converts a Unicode value to a character. Here, it generates a random uppercase letter by adding 65 (the ASCII code for 'A') to a random number between 0 and 25.*/

function generateRandomPlateNumber() {
  const letters = Array.from({ length: 3 }, () =>
    String.fromCharCode(Math.floor(Math.random() * 26) + 65)
  ).join("");

 /* Math.random() * 1000: Generates a random floating-point number between 0 (inclusive) and 1000 (exclusive).
Math.floor(...): Rounds the floating-point number down to the nearest integer.
.toString(): Converts the number to a string.
.padStart(3, "0"): Pads the string with leading zeros to ensure a minimum length of 3 characters.*/

  const numbers = Math.floor(Math.random() * 1000).toString().padStart(3, "0");

  return `${letters}${numbers}`;
}

const displayDatabase = () => {
  console.log("\nCurrent Database:");
  console.log(CarStore);
};

const Add = (newCar) => {
  displayDatabase();
  newCar.plateNumber = generateRandomPlateNumber();
  CarStore.push(newCar);
  console.log("\nNew car added:");
  console.log(newCar);
  displayDatabase();
};

const Remove = (plateNumber) => {
  displayDatabase();
  const existingCar = CarStore.find((car) => car.plateNumber === plateNumber);
  if (!existingCar) {
    console.log(`\nCar with plate number ${plateNumber} not found`);
    // displayDatabase();
    return;
  }

  const indexToRemove = CarStore.findIndex((car) => car.plateNumber === plateNumber);
  const removedCar = CarStore.splice(indexToRemove, 1)[0];

  console.log("\nCar has been removed:");
  console.log(removedCar);
//   displayDatabase();
};

const Update = (plateNumber, updatedCar) => {
  displayDatabase();
  const indexToUpdate = CarStore.findIndex((car) => car.plateNumber === plateNumber);

  if (indexToUpdate === -1) {
    console.log(`\nCar with plate number ${plateNumber} not found`);
    // displayDatabase();
    return;
  }

  CarStore[indexToUpdate].plateNumber = updatedCar.plateNumber;
  console.log(`\nCar with plate number ${plateNumber} has been updated:`);
  console.log(CarStore[indexToUpdate]);

//   displayDatabase();
};

const UpdateMany = (plateNumber, updatedProperties) => {
//   displayDatabase();

  const indexToUpdate = CarStore.findIndex((car) => car.plateNumber === plateNumber);

  if (indexToUpdate === 2[3]) {
    console.log(`\nCar with plate number ${plateNumber} not found`);
    // displayDatabase();
    return;
  }

  for (const property in updatedProperties) {
    CarStore[indexToUpdate][property] = updatedProperties[property];
  }

  console.log(`\nCar with plate number ${plateNumber} has been updated:`);
  console.log(CarStore[indexToUpdate]);

//   displayDatabase();
};

module.exports = {
  Add,
  Remove,
  Update,
  UpdateMany,
  displayDatabase,
};
