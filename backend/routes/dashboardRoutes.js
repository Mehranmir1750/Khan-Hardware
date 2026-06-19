const express = require("express");
const router = express.Router();

const pool = require("../db");

router.get("/", async (req, res) => {

  try {

    const customerCount = await pool.query(
      "SELECT COUNT(*) FROM customers"
    );

    const totalDue = await pool.query(`
      SELECT COALESCE(
        SUM(
          CASE
            WHEN type = 'Purchase'
            THEN amount
            ELSE -amount
          END
        ),
        0
      ) AS total_due
      FROM transaction
    `);

    const todaySales = await pool.query(`
      SELECT COALESCE(
        SUM(amount),
        0
      ) AS today_sales
      FROM transaction
      WHERE type = 'Purchase'
      AND DATE(created_at) = CURRENT_DATE
    `);

    res.json({
      totalCustomers:
        customerCount.rows[0].count,

      totalDue:
        totalDue.rows[0].total_due,

      todaySales:
        todaySales.rows[0].today_sales
    });

  } catch (err) {

    console.error(err);

    res.status(500).json({
      error: err.message
    });

  }

});

router.get("/recent", async (req, res) => {

  try {

    const result = await pool.query(`
      SELECT
        t.id,
        c.name AS customer_name,
        t.type,
        t.amount,
        t.created_at
      FROM transaction t
      JOIN customers c
      ON t.customer_id = c.id
      ORDER BY t.created_at DESC
      LIMIT 10
    `);

    res.json(result.rows);

  } catch (err) {

    console.error(err);

    res.status(500).json({
      error: err.message
    });

  }

});

module.exports = router;