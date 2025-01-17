const userHandler = require('../domain/user_handler.js');

exports.getallUsers = (req, res) => {
    try {
        const users = user_andler.readAll();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error retrieving users', error: error.message });
    }
};