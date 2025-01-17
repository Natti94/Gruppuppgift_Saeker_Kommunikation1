const express = require("express");
const cors = require("cors");
require("dotenv").config(); 

const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");
const messageRoutes = require("./routes/messageRoutes");

const app = express();
app.use(cors());  
app.use(express.json()); 


app.use('/api/users', userRoutes)
// app.use('/api/auth')
//app.use('/api/messages')

module.exports = app;



