const mongoose = require("mongoose");
const { Schema } = mongoose;

const marketBenefit = new Schema({
  name: String,
  hours: Number
});

module.exports = marketBenefit;
