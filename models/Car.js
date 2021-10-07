const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const carSchema = new Schema({
  marke: String,
  modell: String,
  baujahr: Number,
  kilometer: Number,
  preis: Number,
  rating: Number,
  imgUrl: String,
  timesRating: Number
});

const Car = model("Car", carSchema);

module.exports = Car;
