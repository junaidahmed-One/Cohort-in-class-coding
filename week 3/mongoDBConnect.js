const express = require("express");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const jwtPassword = "123456";
const config = require("./databaseDetails");

mongoose.connect(config.connection);

const User = mongoose.model("User", {
	name: String,
	username: String,
	password: String,
});

const app = express();
app.use(express.json());

const generateRandomString = (length) =>
	Array.from({ length }, () =>
		String.fromCharCode(65 + Math.floor(Math.random() * 26))
	).join("");

async function userExists(username, password) {
	// should check in the database
	const data = await User.findOne({ username: username });
	return data !== null;
}

app.post("/signup", async function (req, res) {
	const username = req.body.username;
	const password = req.body.password;

	try {
		const person = await User.create({
			name: generateRandomString(4),
			username: username,
			password: password,
		});
		res.status(201).json(person);
	} catch (error) {
		console.log(error);
		res.status(400).send(error);
	}
});

app.post("/signin", async function (req, res) {
	const username = req.body.username;
	const password = req.body.password;
	const isExits = await userExists(username, password);
	if (!isExits) {
		return res.status(403).json({
			msg: "User doesnt exist in our in memory db",
		});
	}

	var token = jwt.sign({ username: username }, jwtPassword);
	return res.json({
		token,
	});
});

app.get("/users", async function (req, res) {
	const token = req.headers.authorization;
	try {
		const decoded = jwt.verify(token, jwtPassword);
		const username = decoded.username;
		// return a list of users other than this username from the database
		let people = [];
		const data = await User.find({ username: username });
		if (data) {
			const allUsers = await User.find({});
			for (let i = 0; i < allUsers.length; i++) {
				if (allUsers[i].username !== data[0].username) {
					people.push(allUsers[i]);
				}
			}
			res.status(200).json(people);
		}
	} catch (err) {
		return res.status(403).json({
			msg: "Invalid token",
		});
	}
});

app.delete("/remove-user", async function (req, res) {
	const token = req.headers.authorization;
	try {
		const decode = jwt.verify(token, jwtPassword);
		const username = decode.username;

		const deletedUser = await User.deleteOne({ username: username });
		if (deletedUser.deletedCount > 0) {
			res.status(200).json({ message: "User deleted Successfully..." });
		} else {
			res.status(404).json({ message: "User not found!" });
		}
	} catch (err) {
		res.status(500).json({ message: "Internal server errorr.." });
	}
});

app.listen(3000);
