"use client";

export function SignupButtonComponent() {
	return (
		<div>
			<button
				type="button"
				className="mt-8 w-full text-white bg-gray-800 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
				onClick={() => {
					console.log("User signed in!");
				}}
			>
				Sign in
			</button>
		</div>
	);
}
