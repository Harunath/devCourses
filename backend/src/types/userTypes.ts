import { z } from "zod";

// Define the user schema
const UserSchema = z.object({
	name: z.string().min(1),
	email: z.string().email(),
	password: z.string().min(6),
	timestamp: z.date().optional(),
});

// Define a type for the user data
type User = z.infer<typeof UserSchema>;

export { UserSchema, User };
