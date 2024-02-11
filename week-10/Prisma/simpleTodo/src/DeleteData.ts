import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function deleteData(email: string) {
	const res = await prisma.user.delete({
		where: { email: email },
	});

	console.log(res);
}

deleteData("junaid@gamil.com");
