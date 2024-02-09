import { Client } from "pg";

const client = new Client({
	connectionString:
		"postgresql://junaidcom0065:MCm6UHWh1aAr@ep-mute-resonance-99602592.us-east-2.aws.neon.tech/test?sslmode=require",
});

async function insertInTable(
	username: string,
	email: string,
	password: string
) {
	try {
		await client.connect();

		const insertQuery =
			"INSERT INTO USERS (username,email,password) VALUES ($1,$2,$3)";

		const values = [username, email, password];

		const res = await client.query(insertQuery, values);
		console.log("Insertion success: " + res);
	} catch (err) {
		console.error("Error during the insertion:", err);
	} finally {
		await client.end();
	}
}

insertInTable("username2", "user2@example.com", "user_password2").catch(
	console.error
);
