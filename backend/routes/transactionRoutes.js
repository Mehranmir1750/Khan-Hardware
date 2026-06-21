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


router.delete("/:id", async (req, res) => {
  try {
    await pool.query(
      "DELETE FROM transaction WHERE id = $1",
      [req.params.id]
    );

    res.json({
      message: "Transaction deleted successfully"
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Server Error"
    });
  }
});


router.get("/:id", async (req, res) => {
  try {

    const { id } = req.params;

    const result = await pool.query(
      `
      SELECT *
      FROM transaction
      WHERE id = $1
      `,
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        message: "Transaction not found"
      });
    }

    res.json(result.rows[0]);

  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Server Error"
    });
  }
});


router.put("/:id", async (req, res) => {
  try {

    const { id } = req.params;

    const {
      item,
      quantity,
      unit,
      price,
      amount
    } = req.body;

    const result = await pool.query(
      `
      UPDATE transaction
      SET
        item = $1,
        quantity = $2,
        unit = $3,
        price = $4,
        amount = $5
      WHERE id = $6
      RETURNING *
      `,
      [item, quantity,unit, price, amount, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({
        message: "Transaction not found"
      });
    }

    res.json({
      message: "Transaction updated successfully",
      transaction: result.rows[0]
    });

  } catch (err) {
    console.error(err);
    res.status(500).json({
      error: "Server Error"
    });
  }
});

module.exports = router;