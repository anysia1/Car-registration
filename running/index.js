const { Add, Remove, Update, UpdateMany,displayDatabase } = require("../stockController/controller");

const newCar = {
  plateNumber: "ABCDEFJ9",
  model: "TOYOOT",
  manufacturingYear: 19990,
  carOwner: "Blandine",
  color: "pink",
  cost: 1000000
};

Add(newCar);

const updatedCarInfo = {
  model: "UpdatedModel",
  manufacturingYear: 2022,
  color: "UpdatedColor",
  cost: 1500000
};

// Provide the plate number and updated car information to the Update function
Update("GHI789", updatedCarInfo);

// Example update for model, carOwner, manufacturingYear using UpdateMany
const plateNumberToUpdateMany = "DEF456";
const updatedProperties = {
  model: "UpdatedModelMany",
  carOwner: "UpdatedOwnerMany",
  manufacturingYear: 2024,
};

const result = UpdateMany(plateNumberToUpdateMany, updatedProperties);

if (result) {
  console.log(`\nCar at index ${result.index} has been updated:`);
  console.log(result.updatedCar);
} else {
  console.log("UpdateMany failed");
}

// You can also call Remove if needed
Remove("ABC123");
displayDatabase();