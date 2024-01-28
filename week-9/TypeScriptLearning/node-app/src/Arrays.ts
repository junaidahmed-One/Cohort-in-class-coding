function max(arr: number[]): number {
	let ans = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] > ans) {
			ans = arr[i];
		}
	}
	return ans;
}

console.log(max([1, 20, 4, 3, 6]));

interface User {
	name: string;
	password: string | number;
	age: number;
}

function filterUsers(user: User[]) {
	return user.filter((person) => person.age >= 18);
}

const user = [
	{ name: "Junaid", password: 12334, age: 12 },
	{ name: "Ahmed", password: "fdsgsdf", age: 18 },
	{ name: "Raam", password: 123, age: 20 },
	{ name: "Rohan", password: "fsdfsd", age: 16 },
	{ name: "Aditya", password: "12334", age: 40 },
];

console.log(filterUsers(user));
