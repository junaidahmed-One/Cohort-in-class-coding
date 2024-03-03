import Image from "next/image";
import axios from "axios";

async function getData() {
	const response = await axios.get("http://localhost:3000/api/user");
	return response.data;
}
export default async function Home() {
	const userData = await getData();

	return <div>{userData?.name}</div>;
}
