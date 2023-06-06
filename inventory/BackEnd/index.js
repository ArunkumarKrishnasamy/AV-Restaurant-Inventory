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

app.get("/inventory", async (req, res) => {
  try {
    const products = await pool.query("SELECT * FROM inventory");
    res.status(200).json(products.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error in getting data" });
  }
});
app.delete("/inventory/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const Delete = await pool.query("DELETE FROM inventory WHERE id=$1", [id]);
    res.status(200).json({ message: "Item Deleted" });
  } catch (error) {
    console.error(error);
    res.status(404).json({ message: "Error occurred while deleting it" });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log("Web server started");
});
