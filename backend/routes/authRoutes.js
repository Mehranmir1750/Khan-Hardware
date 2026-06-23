const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

router.post("/login", async (req, res) => {

  const { username, password } = req.body;

  // Replace with your desired credentials
  if (
    username === "admin" &&
    password === "1234567890"
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