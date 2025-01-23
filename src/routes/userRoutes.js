const express = require('express');
const router = express.Router();

const {
    createUser,
    getUser,
    inviteUser,
    getAllUsers,
    putUser,
    deleteUser,
} = require('../Controllers/userController');

router.post("/", createUser);
<<<<<<< HEAD
// router.post("/invite", inviteUser);
router.get("/", getAllUsers); 
router.get("/:id", getUser); 
//router.put("/:id", putUser);
//router.delete("/:id", deleteUser);
=======
router.post("/invite", inviteUser);
router.get("/", getAllUsers); 
router.get("/:id", getUser); 
router.put("/:id", putUser);
router.delete("/:id", deleteUser);
>>>>>>> c014c494f78282df3b4a5a6bff380258b095bec6

module.exports = router;




