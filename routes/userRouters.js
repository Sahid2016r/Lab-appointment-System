const express = require("express");
const { loginController, registerController,docregisterController } = require("../controllers/userCtrl");


//router object
const router = express.Router();

//routes
// LOGIN || POST
router.post("/login", loginController);

// REGISTER || POST
router.post("/register", registerController);

// DocREGISTER || POST
router.post("/docregister", docregisterController);

// Auth || POST
router.post('/getUserData');

module.exports = router;
