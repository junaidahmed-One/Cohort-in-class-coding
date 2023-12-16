const express = require("express");
const zod = require("zod");
const app = express();

const schema = zod.array(zod.number());

const schema1 = zod.object({
	name: zod.string(),
	phone: zod.number(),
	country: zod.literal("IN").or(zod.literal("US")),
});

app.use(express.json());

app.post("/health-checkup", function (req, res) {
	// kidneys = [1, 2]
	const kidneys = req.body.kidneys;
	const response = schema1.safeParse(kidneys);
	if (response.success) {
		res.send({
			response,
		});
	} else {
		res.status(400).send({
			response,
		});
	}
});

app.listen(3000);
