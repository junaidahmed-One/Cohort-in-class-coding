const express = require("express");

const app = express();

const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello from Express server!");
});

app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
