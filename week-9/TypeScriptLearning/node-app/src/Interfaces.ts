interface User {
	firstName: string;
	lastName: string;
	age: number;
}

function isLegal(user: User) {
	if (user.age >= 18) {
		return true;
	}
	return false;
}

console.log(isLegal({ firstName: "Junaid", lastName: "Ahmed", age: 22 }));
