const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
 require("dotenv").config();

router.post("/login", async (req, res) => {

  const { username, password } = req.body;

  
  if (
    username === process.env.ADM_USERNAME &&
    password === process.env.ADM_PASSWORD
  ) {

    const token = jwt.sign(
      { role: "admin" },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    return res.json({
      token
    });
  }

  res.status(401).json({
    message: "Invalid credentials"
  });

});

module.exports = router;