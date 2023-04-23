const express = require("express");
const bodyParser = require("body-parser");
const pg = require("pg");

const app = express();
const port = 3000;

app.use(bodyParser.json());

const pool = new pg.Pool({
  user: "postgres",
  host: "localhost",
  database: "hotel_ahar",
  password: "Rajesh@2098",
  port: 5433,
});

// Get all users
app.get("/users", (req: any, res: any) => {
  pool.query("SELECT * FROM users", (error: any, results: any) => {
    if (error) {
      throw error;
    }

    res.status(200).json(results.rows);
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
