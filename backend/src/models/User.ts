import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
	email: string;
	password: string;
}

const UserSchema: Schema = new Schema({
	name: { type: String, required: true },
	email: { type: String, required: true, unique: true },
	password: { type: String, required: true },
	timestamp: { type: Date, default: Date.now },
});

const UserCourses = mongoose.model("UserCourses", UserSchema);

export default UserCourses;
