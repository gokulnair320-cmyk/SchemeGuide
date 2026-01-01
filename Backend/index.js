const express = require("express");
const cors = require("cors");

const app = express();

// allow requests from frontend
app.use(cors());

// allow reading JSON body
app.use(express.json());

app.get("/", (req, res) => {
  res.send("SchemeGuide backend running");
});

app.post("/api/eligibility", (req, res) => {
  console.log("Received form data from frontend:");
  console.log(req.body);

  res.json({
    success: true,
    message: "Form data received successfully",
    receivedData: req.body
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
