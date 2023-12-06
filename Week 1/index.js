//write the program to greet a person given thier first and last name

let first = "Junaid";
let last = "Ahmed";

console.log(`Hi ${first} ${last}`);

//write a program that greets a person based on thier Gender

let gender = "female";

if (gender === "male") {
  console.log(`Hey man!`);
} else {
  console.log(`Hello Lady`);
}

//Write a program that counts from 0 - 1000 and prints (for loop)

let count = 0;

for (let i = 0; i <= 1000; i++) {
  console.log(`count ${i}`);
}

//Write a program prints all the even numbers in an array
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < arr.length; i++) {
  if (i % 2 === 0) {
    console.log(`${i} is even`);
  } else {
    continue;
  }
}

//Write a program to print the biggest number in an array

let arr1 = [100, 3, 5, 1, 0, 9, 33];

const max = (arr1) => {
  let cur_max = 0;

  for (let i = 0; i < arr1.length; i++) {
    let cur_val = arr1[i];
    if (cur_val >= cur_max) {
      cur_max = cur_val;
    }
  }
  return cur_max;
};

console.log(`Biggest number from the array is ${max(arr1)}`);

//Write a program that prints all the male people’s first name given a complex object

const people = [
  {
    name: "Junaid",
    gender: "male",
  },
  {
    name: "Ahmed",
    gender: "male",
  },
  {
    name: "Riya",
    gender: "female",
  },
];

for (let i = 0; i < people.length; i++) {
  if (people[i].gender === "male") {
    console.log(people[i].name);
  }
}

//Write a program that reverses all the elements of an array

let revArray = [1, 2, 3, 4, 5, 6, 7];

let i = 0;
let j = revArray.length - 1;

while (i <= j) {
  let temp = revArray[i];
  revArray[i] = revArray[j];
  revArray[j] = temp;
  i++;
  j--;
}

console.log(revArray);

//Write a function that finds the sum of two numbers

const findSum = (a, b) => {
  return a + b;
};
let a = 9;
let b = 10;
console.log(`${findSum(a, b)}`);

//Write another function that displays this result in a pretty format

const prettyPrint = (fn) => {
  const val = fn(a, b); //callbacks example.
  return `The Sum of the ${a} & ${b} is ${val}`;
};

console.log(prettyPrint(findSum));

//Write another function that takes this sum and prints it in passive tense
