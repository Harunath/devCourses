import { useState } from "react";

const Register = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);

	const handleRegister = () => {
		// Handle registration logic here
		console.log(
			"Registering with name:",
			name,
			"email:",
			email,
			"and password:",
			password
		);
	};

	return (
		<div className="container mx-auto my-8 px-4">
			<h1 className="text-3xl font-bold mb-6">Register</h1>
			<div className="mb-4">
				<label
					className="block text-gray-700 text-sm font-bold mb-2"
					htmlFor="name">
					Name
				</label>
				<input
					type="text"
					id="name"
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					placeholder="Enter your name"
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
			</div>
			<div className="mb-4">
				<label
					className="block text-gray-700 text-sm font-bold mb-2"
					htmlFor="email">
					Email
				</label>
				<input
					type="email"
					id="email"
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					placeholder="Enter your email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
			</div>
			<div className="mb-6">
				<label
					className="block text-gray-700 text-sm font-bold mb-2"
					htmlFor="password">
					Password
				</label>
				<div className="relative">
					<input
						type={showPassword ? "text" : "password"}
						id="password"
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						placeholder="Enter your password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
					/>
					<button
						className="absolute top-0 right-0 mt-2 mr-4 focus:outline-none"
						onClick={() => setShowPassword(!showPassword)}>
						{showPassword ? "Hide" : "Show"}
					</button>
				</div>
			</div>
			<button
				className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
				onClick={handleRegister}>
				Register
			</button>
		</div>
	);
};

export default Register;
