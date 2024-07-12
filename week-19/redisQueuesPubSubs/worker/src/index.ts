import { createClient } from "redis";

const client = createClient();

async function popfromQueue() {
	try {
		await client.connect();
		while (1) {
			const response = await client.brPop("problems", 0);
			console.log(response);
			//processing the request
			await new Promise((resolve) => setTimeout(resolve, 1000));

			console.log("Processed user submisions");
		}
	} catch (error) {
		console.error(error);
	}
}

popfromQueue();
