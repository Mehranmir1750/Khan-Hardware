const express =require("express");
const cors =require("cors");
require("dotenv").config();

const pool = require("./db");

const app = express();

const customerRoutes = require("./routes/customerRoutes");
const transactionRoutes = require("./routes/transactionRoutes");
const dashboardRoutes =require("./routes/dashboardRoutes");

app.use(cors());
app.use(express.json());

app.use("/api/customers", customerRoutes);
app.use("/api/transaction",transactionRoutes);

app.use("/api/dashboard",dashboardRoutes);


app.listen(process.env.PORT, () => {
  console.log(
    `Server running on port ${process.env.PORT}`
  );
});