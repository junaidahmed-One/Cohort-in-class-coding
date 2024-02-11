import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getData(email: string) {
	const res = await prisma.user.findFirst({
		where: { email: email },
		select: {
			id: true,
			email: true,
			firstName: true,
			lastName: true,
		},
	});

	console.log(res);
}

getData("junaid@gamil.com");
