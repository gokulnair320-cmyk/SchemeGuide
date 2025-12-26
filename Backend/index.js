const express = require("express");
const cors = require("cors");

const app = express();

// allow requests from frontend
app.use(cors());

app.get("/", (req, res) => {
  res.send("SchemeGuide backend running");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
