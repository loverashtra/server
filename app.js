const express = require("express");
const app = express();
const PORT = 5000;

app.get("/", (req, res) => {
  res.json("welcome to loverashtra");
});

app.listen(PORT, () => console.log("Server listening on port", PORT));
