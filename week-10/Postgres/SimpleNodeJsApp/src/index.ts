import { Client } from "pg";

const client = new Client({
	connectionString:
		"postgresql://junaidcom0065:MCm6UHWh1aAr@ep-mute-resonance-99602592.us-east-2.aws.neon.tech/test?sslmode=require",
});

async function createUserTable() {
	await client.connect();
	const result = await client.query(`CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);`);
	console.log(result);
}

createUserTable();
