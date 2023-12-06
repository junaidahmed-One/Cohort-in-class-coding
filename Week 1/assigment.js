//Create a counter in Javascript (counts down from 30 to 0)

const counter = () => {
  for (let i = 30; i >= 0; i--) {
    console.log(i);
  }
};

counter();

//Calculate the time it takes between a setTimeout call and the inner function actually running

const add = (a, b) => {
  console.log(a + b);
};
let d = new Date();
const before = d.getSeconds();
add(10, 20);

const after = d.getSeconds() - before;
console.log(after);

//Create a terminal clock (HH:MM:SS)

const updateTime = () => {
  const time = new Date();

  const hours = time.getHours().toString();
  const mins = time.getMinutes().toString();
  const secs = time.getSeconds().toString();

  console.log(`${hours} : ${mins} : ${secs}`);
};

setInterval(updateTime, 1000);
