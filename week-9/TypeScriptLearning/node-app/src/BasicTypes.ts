function greet(name: string) {
	console.log(`Hello ${name}`);
}

greet("Junaid");

function sum(a: number, b: number): number {
	return a + b;
}

const ans = sum(5, 8);
console.log(ans);

function isLegal1(a: number): boolean {
	if (a >= 18) {
		return true;
	}
	return false;
}

console.log(isLegal1(13));

//void is type for function
function runafter1S(callback: () => void) {
	setTimeout(callback, 1000);
}
runafter1S(() => console.log("Runs after 1 sec"));
