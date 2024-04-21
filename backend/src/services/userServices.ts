import UserCourses from "../models/User";
import bcrypt from "bcryptjs";

export async function registerUser(
	name: string,
	email: string,
	password: string
): Promise<boolean> {
	try {
		const existingUser = await UserCourses.findOne({ email });
		console.log(existingUser);
		if (!existingUser) {
			const hashedPassword = await bcrypt.hash(password, 10);
			const newUser = new UserCourses({
				name,
				email,
				password: hashedPassword,
			});
			await newUser.save();
			return true;
		}
		return false;
	} catch (error) {
		console.error("Error registering user:", error);
		return false;
	}
}

export async function loginUser(
	email: string,
	password: string
): Promise<boolean> {
	try {
		let isValidPassword = false;

		// Find user by email
		const existingUser = await UserCourses.findOne({ email: email });

		// If user not found, return false
		if (existingUser && existingUser.password) {
			// Compare passwords
			isValidPassword = await bcrypt.compare(
				password,
				existingUser.password as string
			);

			return isValidPassword;
		} else return false;
	} catch (error) {
		// If validation fails or any other error occurs, log the error and return false
		console.error("Error logging in:", error);
		return false;
	}
}
