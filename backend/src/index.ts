import express from "express";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
	console.log("App started");
	res.json({ msg: "App is running" });
});

app.listen(3005, () => {
	console.log("server is running on http://localhost:3005");
});
