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
      unit,
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
        unit,
        price,
        amount
      )
      VALUES ($1,$2,$3,$4,$5,$6,$7)
      RETURNING *
      `,
      [
        customer,
        type,
        item,
        quantity,
        unit,
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
 SELECT
    t.id,
    c.name AS customer_name,
    t.type,
    t.item,
    t.quantity,
    t.unit,
    t.price,
    t.amount,
    t.created_at
 FROM transaction t
 JOIN customers c
 ON t.customer_id = c.id
 ORDER BY t.id DESC
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



router.get("/customer/:id", async (req, res) => {

  try {

    const { id } = req.params;

    const result = await pool.query(
      `
      SELECT *
      FROM transaction
      WHERE customer_id = $1
      ORDER BY created_at ASC
      `,
      [id]
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