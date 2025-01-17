const router = require('express').Router();
const {
    createUser,
    inviteUser,
    getAllUsers,
    getUser,
    putUser,
    deleteUser,
  } = require('../controller/userController')

router.post("/", userController.createUser);
router.post("/invite", userController.invite_user);
router.get("/", userController.getAllUser);
router.get("/id", userController.getUser);
router.put("/id", userController.putUser);
router.delete("/id", userController.deleteUser)

module.exportes = router;
