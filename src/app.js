const express = require("express");
const cors = require("cors");
require("dotenv").config(); 

const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");
const messageRoutes = require("./routes/messageRoutes");
const authMiddleware = require("./middleware/authMiddleware");

const app = express();
app.use(cors());  
app.use(express.json()); 


app.use('/api/users', userRoutes)
<<<<<<< HEAD
app.use('/api/auth', authMiddleware)
=======
app.use('/api/auth')
>>>>>>> c014c494f78282df3b4a5a6bff380258b095bec6
app.use('/api/messages', messageRoutes)

module.exports = app;



