const mongoose = require("mongoose");
const { Schema } = mongoose;
const marketBenefit = require("./MarketBenefit");

const projectSchema = new Schema({
  title: String,
  description: String,
  issueid: String,
  projectManager: String,
  developer: String,
  brand: String,
  benefitsByMarket: [marketBenefit]
});

mongoose.model("projects", projectSchema);
