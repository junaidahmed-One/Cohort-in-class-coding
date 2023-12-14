const express = require("express");

const app = express();

app.use(express.json());

const users = [
  {
    name: "John",
    kidneys: [
      {
        healthy: false,
      },
    ],
  },
];

app.get("/", (req, res) => {
  const johnKidney = users[0].kidneys;
  const numberOfKidneys = johnKidney.length;
  let numberOfHealthyKidneys = 0;
  for (let i = 0; i < johnKidney.length; i++) {
    if (johnKidney[i].healthy) {
      numberOfHealthyKidneys = numberOfHealthyKidneys + 1;
    }
  }
  let numberOfUnhealtyHealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
  res.json({
    numberOfKidneys,
    numberOfHealthyKidneys,
    numberOfUnhealtyHealthyKidneys,
  });
});

app.post("/", (req, res) => {
  let isHealthy = req.body.healthy;
  users[0].kidneys.push({
    healthy: isHealthy,
  });
  res.json({
    message: "Done!",
  });
});

app.put("/", (req, res) => {
  for (let i = 0; i < users[0].kidneys.length; i++) {
    users[0].kidneys[i].healthy = true;
  }
  res.json({});
});

app.delete("/", (req, res) => {
  const newKidney = [];
  for (let i = 0; i < users[0].kidneys; i++) {
    if (users[0].kidneys.healthy) {
      newKidney.push({
        healthy: true,
      });
    }
  }
  users[0].kidneys = newKidney;
  res.json({ message: "Done!" });
});

app.listen(3000);
