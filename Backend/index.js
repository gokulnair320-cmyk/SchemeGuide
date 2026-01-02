const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const Scheme = require("./models/Scheme");



const app = express();

// allow requests from frontend
app.use(cors());

// allow reading JSON body
app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/schemeguide")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));


app.get("/", (req, res) => {
  res.send("SchemeGuide backend running");
});

app.post("/api/eligibility", async (req, res) => {
  const user = req.body;

  const schemes = await Scheme.find();

  const eligibleSchemes = schemes.filter((scheme) => {
    if (user.age < scheme.minAge || user.age > scheme.maxAge) return false;
    if (scheme.state !== "ALL" && scheme.state !== user.state) return false;
    if (!scheme.applicableTo.includes(user.category.toUpperCase())) return false;
    if (user.income > scheme.maxIncome) return false;
    return true;
  });

  // ✅ Response must be INSIDE the route
  res.json({ eligibleSchemes });
});



app.listen(5000, () => {
  console.log("Server running on port 5000");
});

app.get("/api/schemes", async (req, res) => {
  const schemes = await Scheme.find();
  res.json(schemes);
});
