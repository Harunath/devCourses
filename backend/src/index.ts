import express from "express";
import cors from "cors";

import userRoutes from "./routes/UserRoutes";
import dbConnection from "./config/db";

const app = express();

dbConnection();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/users", userRoutes);
app.get("/", (req, res) => {
	console.log("App started");
	res.json({ msg: "App is running" });
});

app.listen(3005, () => {
	console.log("server is running on http://localhost:3005");
});
