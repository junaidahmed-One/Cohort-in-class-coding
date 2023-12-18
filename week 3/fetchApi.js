fetch("https://fakerapi.it/api/v1/persons")
	.then((res) => res.json())
	.then((data) => {
		console.log(data.data[0]);
	})
	.catch((error) => {
		console.error("Error:", error);
	});
