const express = require("express");
const cors = require("cors");
require("dotenv").config();  

const app = express();
const PORT = process.env.PORT || 3001;


app.use(cors());  
app.use(express.json());  


app.get("/", (req, res) => {
  res.send("Välkommen till Express-servern!");
});


app.use((req, res) => {
  res.status(404).json({ message: "Route not found." });
});


app.use((err, req, res, next) => {
  console.error(err);  
  res.status(500).json({ message: "Internal server error." });
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});