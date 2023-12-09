/* 
Async, Await and Promises
*/

function findSum() {
  let ans = 0;
  for (let i = 0; i < 100; i++) {
    ans += i;
  }
  console.log(ans);
}

setTimeout(findSum, 1000); // setTimeout is asynchronous function
console.log("hello world"); // This prints first.

const fs = require("fs");

fs.readFile("a.txt", "utf-8", function (err, data) {
  console.log(data);
});

console.log("Running before fs");

function JunaidsReadFile() {
  return new Promise(function (resolve) {
    fs.readFile("a.txt", "utf-8", function (err, data) {
      resolve(data);
    });
  });
}

function onCall(data) {
  console.log(data);
}

JunaidsReadFile().then(onCall);

function JunReadFile() {
  return new Promise(function (resolve) {
    resolve("hi there!");
  });
}

async function main() {
  let value = await JunReadFile();
  console.log(value);
}

main();
