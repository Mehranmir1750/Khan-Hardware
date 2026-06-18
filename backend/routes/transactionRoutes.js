const express = require("express");
const router = express.Router();

const pool = require("../db");


router.post("/", async (req, res) => {

  try {

    const {
      customer,
      type,
      item,
      quantity,
      price,
      amount
    } = req.body;

    const result = await pool.query(
      `
      INSERT INTO transaction
      (
        customer_id,
        type,
        item,
        quantity,
        price,
        amount
      )
      VALUES ($1,$2,$3,$4,$5,$6)
      RETURNING *
      `,
      [
        customer,
        type,
        item,
        quantity,
        price,
        amount
      ]
    );

    res.status(201).json(
      result.rows[0]
    );

  } catch (err) {

    console.error(err);

    res.status(500).json({
      error: err.message
    });

  }

});


router.get("/", async (req, res) => {

  try {

    const result = await pool.query(
      `
      SELECT *
      FROM transaction
      ORDER BY id DESC
      `
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