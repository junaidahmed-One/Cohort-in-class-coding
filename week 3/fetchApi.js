fetch("https://fakerapi.it/api/v1/persons")
	.then((res) => res.json())
	.then((data) => {
		console.log(data.data[0]);
	})
	.catch((error) => {
		console.error("Error:", error);
	});

async function useFetch() {
	const result = await fetch("https://fakerapi.it/api/v1/persons");
	const res = await result.json();
	console.log(res.data[0].address);
}

useFetch();
