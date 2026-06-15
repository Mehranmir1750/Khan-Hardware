const express = require("express");
const router = express.Router();

const pool = require("../db");


// CREATE CUSTOMER
router.post("/", async (req, res) => {

  try {

    const { name, phone, address } = req.body;

    const result = await pool.query(
      `
      INSERT INTO customers
      (name, phone, address)
      VALUES ($1, $2, $3)
      RETURNING *
      `,
      [name, phone, address]
    );

    res.status(201).json(result.rows[0]);

  } catch (err) {

    console.error(err);

    res.status(500).json({
      error: err.message
    });

  }

});


// GET ALL CUSTOMERS
router.get("/", async (req, res) => {

  try {

    const result = await pool.query(
      "SELECT * FROM customers ORDER BY id DESC"
    );

    res.json(result.rows);

  } catch (err) {

    console.error(err);

    res.status(500).json({
      error: err.message
    });

  }

});

module.exports = router;