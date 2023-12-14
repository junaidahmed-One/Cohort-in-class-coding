const express = require("express");

const app = express();

app.listen(3000);

function calculateSum(n) {
  let sum = 0;

  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}

app.get("/", (req, res) => {
  let n = req.query.n;
  const ans = calculateSum(n);
  res.send(ans.toString());
});
