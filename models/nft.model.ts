import mongoose from "mongoose";
import bcrypt from "bcrypt";

const Schema = mongoose.Schema;
const NFTSchema = new Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: "User",
	},
	name: {
		type: String,
		required: true,
	},
	image: {
		type: String,
		required: true,
	},
	price: {
		last: {
			type: Number,
			required: false,
		},
		current: {
			type: Number,
			required: true,
		},
	},
	collection: {
		type: String,
		required: true,
	},
	wallet: {
		type: String,
		required: true,
	},
});

export default mongoose.model("NFT", NFTSchema);
