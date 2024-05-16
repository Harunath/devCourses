import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	return (
		<nav className="bg-gray-800 p-4">
			<div className="max-w-7xl mx-auto flex justify-between items-center">
				<Link to="/" className="text-white text-lg font-bold">
					YourLogo
				</Link>
				<ul className="flex space-x-4">
					<li>
						<Link to="/courses" className="text-white">
							Courses
						</Link>
					</li>
					<li>
						<Link to="/about" className="text-white">
							About
						</Link>
					</li>
					<li>
						{isAuthenticated ? (
							<button
								onClick={() => setIsAuthenticated(false)}
								className="text-white">
								Logout
							</button>
						) : (
							<Link to="/login" className="text-white">
								Login
							</Link>
						)}
					</li>
					<li>
						{!isAuthenticated ? (
							<Link to="/register" className="text-white">
								Register
							</Link>
						) : (
							""
						)}
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
