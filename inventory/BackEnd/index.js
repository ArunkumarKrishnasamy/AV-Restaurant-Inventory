const express = require("express");
const app = express();
app.use(express.json());

// Middleware
const cors = require("cors");
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);

// DB connection
const pool = require("./db.js");

// Routes
app.post("/inventory", async (req, res) => {
  try {
    const { contact, operation_type, product_name, demand } = req.body;
    const addInventory = await pool.query(
      "INSERT INTO inventory(contact, operation_type, product_name, demand) VALUES ($1, $2,$3, $4) RETURNING *",
      [contact, operation_type, product_name, demand]
    );
    res.status(200).json(addInventory.rows[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Posting data went wrong" });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log("Web server started");
});
