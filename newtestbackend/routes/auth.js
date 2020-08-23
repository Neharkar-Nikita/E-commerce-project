var express = require("express");
var router = express.Router();
const { check } = require("express-validator");
const { signup,signin,getUserById,updateUser } = require("../controllers/auth");

router.post(
  "/signup",
  [
    check("name", "name should be at least 3 char").isLength({ min: 3 }),
    check("email", "email is required").isEmail(),
    check("password", "password should be at least 3 char").isLength({ min: 3 }),
     check("mobileno", "mobile no. is required").isLength({max: 10})
  ],
  signup
);

router.post(
  "/signin",
  [
    check("email", "email is required").isEmail(),
    check("password", "password field is required").isLength({ min: 4 })
  ],
  signin
);

//router.post("/signup", signup);

router.param("UserId", getUserById);

router.put( "/auth/:UserId",updateUser);


module.exports = router;

 