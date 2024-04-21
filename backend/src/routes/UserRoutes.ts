import express, { Request, Response } from "express";
import { registerUser, loginUser } from "../services/userServices";
import UserCourses from "../models/User";

const router = express.Router();

router.post("/register", async (req: Request, res: Response) => {
	const { name, email, password } = req.body;
	try {
		const newUser = await registerUser(name, email, password);
		if (!newUser) {
			res.status(401).send("User already exist");
		}
		res.status(201).send("User registered successfully");
	} catch (error) {
		res.status(500).send("Error registering user");
	}
});

router.post("/login", async (req: Request, res: Response) => {
	const { email, password } = req.body;
	try {
		const isAuthenticated = await loginUser(email, password);
		if (isAuthenticated) {
			res.status(200).send("Login successful");
		} else {
			res.status(401).send("Invalid credentials");
		}
	} catch (error) {
		res.status(500).send("Error logging in");
	}
});

router.get("/", async (req: Request, res: Response) => {
	try {
		const users = await UserCourses.find();
		res.status(200).json(users);
	} catch (error) {
		console.error("Error fetching users:", error);
		res.status(500).send("Error fetching users");
	}
});

export default router;
