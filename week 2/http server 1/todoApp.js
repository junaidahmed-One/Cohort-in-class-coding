const express = require("express");

const app = express();

const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

let tasks = [];

app.post("/add-task", (req, res) => {
  let task = req.body;
  if (task) {
    tasks.push(task);
    //console.log("Task added succesfully");
    res.status(201).json({
      message: "Task added successfully",
      tasks,
    });
  } else {
    res.status(404).json({
      message: "Error",
    });
  }
});

app.get("/get-tasks", (req, res) => {
  res.status(200).send(tasks);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
