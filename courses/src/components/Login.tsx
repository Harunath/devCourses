import { useState } from "react";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [showPassword, setShowPassword] = useState(false);

	const handleLogin = () => {
		// Handle login logic here
		console.log("Logging in with email:", email, "and password:", password);
	};

	return (
		<div className="container mx-auto my-8 px-4">
			<h1 className="text-3xl font-bold mb-6">Login</h1>
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
				onClick={handleLogin}>
				Login
			</button>
		</div>
	);
};

export default Login;
