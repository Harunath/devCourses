import { Route, Routes } from "react-router-dom";
import Navbar from "./components/NavBar";
import Home from "./components/Home";
import Courses from "./components/Courses";
import About from "./components/About";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
	return (
		<div>
			<Navbar />
			<Routes>
				<Route path="" element={<Home />} />
				<Route path="/courses" element={<Courses />} />
				<Route path="/about" element={<About />} />
				<Route path="/login" element={<Login />} />
				<Route path="/register" element={<Register />} />
				<Route path="*" element={<h1>Route does not exist</h1>} />
			</Routes>
		</div>
	);
}

export default App;
