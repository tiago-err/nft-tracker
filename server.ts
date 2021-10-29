import mongoose from "mongoose";
import app from "./index";
const port = 8080;

const {DB_URL, DB_USER, DB_PASSWORD, DB_DATABASE} = process.env;
mongoose.connect(DB_URL as string, {auth: {username: DB_USER, password: DB_PASSWORD}, dbName: DB_DATABASE});

mongoose.connection.once("open", () => {
	console.log("MongoDB database connection established successfully");
});

console.log(`Node environment: ${process.env.NODE_ENV}`);
app.listen(port, () => {
	console.log(`Example app listening at port http://localhost:${port}`);
});
