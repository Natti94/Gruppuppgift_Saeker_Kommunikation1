const express = require("express");
const cors = require("cors");
require("dotenv").config(); 

const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");
const messageRoutes = require("./routes/messages");

const app = express();
app.use(cors());  
app.use(express.json()); 


app.use('/api/users')
app.use('/api/auth')
app.use('/api/messages')

module.exports = app;


