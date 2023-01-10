const express = require("express");

const router = express.Router();

const {loginUser, signUpUser} = require ("../controllers/userController")

// login
router.post('/login', loginUser)

// signup
router.post('/signup', signUpUser)

module.export = router