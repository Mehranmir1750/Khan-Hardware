const express = require("express");
const router = express.Router();

const pool = require("../db");
const auth = require("../middleware/auth");

// router.get("/recent", async (req, res) => {

//   try {

//     const result = await pool.query(`
//       SELECT
//         t.id,
//         c.name AS customer_name,
//         t.type,
//         t.amount,
//         t.created_at,

//         // COALESCE(
//         //   SUM(
//         //     CASE
//         //     WHEN t.type = 'Purchase'
//         //     THEN t.amount
//         //     ELSE -t.amount
//         //   END
//         //   ),
//         // 0
//         //   ) AS balance
           
//       FROM transaction t
//       JOIN customers c
//       ON t.customer_id = c.id
//       ORDER BY t.created_at DESC
//       LIMIT 10
//     `);

//     res.json(result.rows);

//   } catch (err) {

//     console.error(err);

//     res.status(500).json({
//       error: err.message
//     });

//   }

// });


router.get("/recent",auth, async (req, res) => {

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