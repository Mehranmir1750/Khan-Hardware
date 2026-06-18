const express =require("express");
const cors =require("cors");
require("dotenv").config();

const pool = require("./db");

const app = express();

const customerRoutes = require("./routes/customerRoutes");
const transactionRoutes = require("./routes/transactionRoutes");

app.use(cors());
app.use(express.json());

app.use("/api/customers", customerRoutes);
app.use(
  "/api/transactions",
  transactionRoutes
);

app.get("/", async(req,res) => {
    try{
        const result = await pool.query("SELECT NOW()");
        res.json(result.rows);
    }catch(err){
        console.error(err);
        res.status(500).json({
            error:err.message,
        });
    }
});

app.listen(process.env.PORT, () => {
  console.log(
    `Server running on port ${process.env.PORT}`
  );
});