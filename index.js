const express = require("express");

const app = express();

require("dotenv").config();

const port = process.env.PORT || 3000; // Use the environment variable PORT if it exists, otherwise default to 3000

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.get("/about", (req, res) => {
  res.send("This is the about page");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
