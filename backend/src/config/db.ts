import mongoose from "mongoose";
import dotenv from "dotenv";
const dbConnection = async () => {
	try {
		dotenv.config();
		// console.log("username " + process.env.USERNAME);
		// console.log("password " + process.env.PASSWORD);
		// const mongoUri = `mongodb+srv://${process.env.USERNAME}:${process.env.PASSWORD}@your-cluster-url/database-name`;
		const mongoUri =
			"mongodb+srv://harunath04:sushma123@cluster0.h3djrbd.mongodb.net/";
		await mongoose.connect(mongoUri);
		console.log("Mongo connected");
	} catch (e) {
		console.log("DB connection faild");
		console.log(e);
	}
};

export default dbConnection;
