const express = require("express");
const cors = require("cors");
require("dotenv").config(); 

const userRoutes = require("./routes/users");
const authRoutes = require("./routes/authRoutes");
const messageRoutes = require("./routes/messageRoutes");

const app = express();
app.use(cors());  
app.use(express.json()); 


app.use('/api/users')
app.use('/api/auth', authRoutes)
app.use('/api/messages', messageRoutes)

module.exports = app;


