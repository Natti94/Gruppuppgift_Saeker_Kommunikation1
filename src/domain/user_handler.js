const User = require('../models/userModel');

const users = [
  {
    id: 1,
    email: "john.doe@example.com",
    password: "hashedpassword123",
    name: "John Doe",
    role: "admin",
    createdAt: new Date("2023-01-01"),
    updatedAt: new Date("2023-01-01"),
  },
  {
    id: 2,
    email: "jane.smith@example.com",
    password: "hashedpassword456",
    name: "Jane Smith",
    role: "user",
    createdAt: new Date("2023-02-15"),
    updatedAt: new Date("2023-02-15"),
  },
  {
    id: 3,
    email: "alex.jones@example.com",
    password: "hashedpassword789",
    name: "Alex Jones",
    role: "moderator",
    createdAt: new Date("2023-03-10"),
    updatedAt: new Date("2023-03-10"),
  },
];
  
  module.exports = users;
  