import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function UpdateData(email: string, firstName: string, lastName: string) {
	const res = await prisma.user.update({
		where: {
			email: email,
		},
		data: {
			firstName,
			lastName,
		},
	});
	console.log(res);
}

UpdateData("junaid@gamil.com", "Ahmed", "Junaid");
