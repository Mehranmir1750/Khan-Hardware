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

    const customersWithBalance = await Promise.all(
      result.rows.map(async (customer) => {

        const balanceResult = await pool.query(
          `
          SELECT COALESCE(
            SUM(
              CASE
                WHEN type = 'Purchase'
                THEN amount
                ELSE -amount
              END
            ),
            0
          ) AS balance
          FROM transaction
          WHERE customer_id = $1
          `,
          [customer.id]
        );

        return {
          ...customer,
          balance: Number(balanceResult.rows[0].balance)
        };

      })
    );

    res.json(customersWithBalance);

  } catch (err) {

    console.error(err);

    res.status(500).json({
      error: err.message
    });

  }

});




router.get("/search/:search", async (req, res) => {

  try {

    const { search } = req.params;

    const result = await pool.query(
      `
      SELECT *
      FROM customers
      WHERE phone = $1
      OR LOWER(name) LIKE LOWER($2)
      LIMIT 1
      `,
      [search, `%${search}%`]
    );

    if (result.rows.length === 0) {

      return res.status(404).json({
        message: "Customer not found"
      });

    }

    const customer = result.rows[0];

    const balanceResult = await pool.query(
      `
      SELECT COALESCE(
        SUM(
          CASE
            WHEN type = 'Purchase'
            THEN amount
            ELSE -amount
          END
        ),
        0
      ) AS balance
      FROM transaction
      WHERE customer_id = $1
      `,
      [customer.id]
    );

    res.json({
      ...customer,
      balance: Number(balanceResult.rows[0].balance)
    });

  } catch (err) {

    console.error(err);

    res.status(500).json({
      error: err.message
    });

  }

});


module.exports = router;