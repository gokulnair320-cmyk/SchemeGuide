const mongoose = require("mongoose");

const schemeSchema = new mongoose.Schema({
  name: String,
  level: String,
  state: String,

  applicableTo: [String],
  socialCategories: [String],

  minEducationLevel: String,

  minAge: Number,
  maxAge: Number,

  allowedGenders: [String],
  allowedAreas: [String],

  disabilityRequirement: String,

  maxIncome: Number,

  link: String
});

module.exports = mongoose.model("Scheme", schemeSchema);
