//union, intersection

type StringOrNumber = string | number;

function displayId(id: StringOrNumber) {
	return `Id is ${id}`;
}

console.log(displayId(10));
console.log(displayId("20"));

type Manager = {
	name: string;
	age: number;
};

type Ceo = {
	Status: string;
	name: string;
};

interface Species {
	type: string;
}
// can mix type and interface
type Charater = Manager & Ceo & Species;

const Alpha: Charater = {
	name: "Junaid",
	Status: "CEO",
	age: 23,
	type: "Human",
};
