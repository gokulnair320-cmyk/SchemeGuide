const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const schemeRoutes = require("./routes/schemeRoutes");
const app = express();






// allow requests from frontend
app.use(cors());

// allow reading JSON body
app.use(express.json());

app.use("/api", schemeRoutes);



mongoose
  .connect("mongodb://127.0.0.1:27017/schemeguide")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error(err));


app.get("/", (req, res) => {
  res.send("SchemeGuide backend running");
});




app.listen(5000, () => {
  console.log("Server running on port 5000");
});

