import { NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

export function GET() {
	return Response.json({
		email: "junaid@gmail.com",
		name: "Junaid",
	});
}

export async function POST(req: NextRequest) {
	const body = await req.json();

	await client.user.create({
		data: {
			username: body.username,
			password: body.password,
		},
	});
	console.log(body);

	return Response.json({
		msg: "Signup successfull",
	});
}
