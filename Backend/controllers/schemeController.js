const Scheme = require("../models/Scheme");
const { filterEligibleSchemes } = require("../utils/eligibilityEngine");

const getAllSchemes = async (req, res) => {
  try {
    const schemes = await Scheme.find();
    res.json(schemes);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch schemes" });
  }
};

const checkEligibility = async (req, res) => {
  try {
    const userData = req.body;
    const schemes = await Scheme.find();

    const eligibleSchemes = filterEligibleSchemes(userData, schemes);

    res.json(eligibleSchemes);
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

module.exports = {
  getAllSchemes,
  checkEligibility
};
