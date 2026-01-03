const express = require("express");
const router = express.Router();




const {
  getAllSchemes,
  checkEligibility
} = require("../controllers/schemeController");



router.get("/schemes", getAllSchemes);
router.post("/eligibility", checkEligibility);

module.exports = router;
