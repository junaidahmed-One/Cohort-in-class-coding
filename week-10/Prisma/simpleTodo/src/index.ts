import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertData(
	email: string,
	password: string,
	firstName: string,
	lastName: string
) {
	const res = await prisma.user.create({
		data: {
			email,
			password,
			firstName,
			lastName,
		},
	});

	console.log(res);
}

insertData("ahmed@gamil.com", "1234", "Ahmeddd", "A");
