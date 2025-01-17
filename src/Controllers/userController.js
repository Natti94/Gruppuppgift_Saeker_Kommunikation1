const users = require('../domain/user_handler.js'); 

exports.getAllUsers = (req, res) => {
  try {
    res.status(200).json(users); 
  } catch (error) {
    res.status(500).json({
      message: 'Error retrieving users',
      error: error.message,
    });
  }
};

exports.getUser = (req, res) => {
  try {
    const userId = parseInt(req.params.id, 10); 
    const user = users.find((u) => u.id === userId); 
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({
      message: 'Error retrieving user',
      error: error.message,
    });
  }
};



