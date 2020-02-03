const mongoose = require("mongoose");
const { Schema } = mongoose;
const marketBenefit = require("./MarketBenefit");

const projectSchema = new Schema({
  creationDate: Date,
  team: String,
  title: String,
  description: String,
  status: String,
  issueid: String,
  projectManager: String,
  developer: String,
  brand: String,
  benefitsFullYear: Number,
  benefitsByMarket: [marketBenefit],
  estimatedMvpDate: Date,
  deployementDate: Date
});

mongoose.model("projects", projectSchema);
