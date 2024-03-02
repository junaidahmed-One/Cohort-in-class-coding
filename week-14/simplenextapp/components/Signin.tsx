import { SignupButtonComponent } from "./SignupButton";

import axios from "axios";

async function getData() {
	const response = await axios.get(
		"https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details"
	);
	return response.data;
}

export async function SigninComponent() {
	const user = await getData();
	return (
		<div className="h-screen flex justify-center flex-col">
			<div className="flex justify-center">
				<a
					href="#"
					className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 "
				>
					<div>
						Hi {user.name} seems like you are already logged in!..
						<div className="px-10">
							<div className="text-3xl font-extrabold">
								Sign in
							</div>
						</div>
						<div className="pt-2">
							<LabelledInput
								label="Username"
								placeholder="harkirat@gmail.com"
							/>
							<LabelledInput
								label="Password"
								type={"password"}
								placeholder="123456"
							/>
							<SignupButtonComponent />
						</div>
					</div>
				</a>
			</div>
		</div>
	);
}

interface LabelledInputType {
	label: string;
	placeholder: string;
	type?: string;
}

function LabelledInput({ label, placeholder, type }: LabelledInputType) {
	return (
		<div>
			<label className="block mb-2 text-sm text-black font-semibold pt-4">
				{label}
			</label>
			<input
				type={type || "text"}
				id="first_name"
				className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
				placeholder={placeholder}
				required
			/>
		</div>
	);
}
