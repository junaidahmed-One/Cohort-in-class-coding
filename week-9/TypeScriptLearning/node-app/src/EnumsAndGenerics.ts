enum Direction {
	UP,
	DOWN,
	RIGHT,
	LEFT,
}

function doSomething(keyPressed: Direction) {
	console.log(keyPressed);
}

doSomething(Direction.UP);

enum Direction1 {
	UP = 1,
	//by default when assigned, the rest follows the next
	DOWN, // 2
	RIGHT, // 3
	LEFT, //4
}

console.log(Direction1.DOWN);

enum Direction2 {
	UP = "UP",
	DOWN = "DOWN",
	RIGHT = "RIGHT",
	LEFT = "LEFT",
}

console.log(Direction2.RIGHT);

function getGenericType<T>(arr: T[]) {
	return arr[0];
}

console.log(getGenericType([1, 2, "Junaid"]));
