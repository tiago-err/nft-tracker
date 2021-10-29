import mongoose from "mongoose";
import bcrypt from "bcrypt";

const Schema = mongoose.Schema;
const UserSchema = new Schema({
	email: {
		type: String,
		trim: true,
		lowercase: true,
		required: [true, "E-mail address is required!"],
		validate: validateEmail, // TODO: Return a better message
		match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/gi, "Please fill a valid e-mail address."],
		unique: true,
	},
	username: {
		type: String,
		trim: true,
		unique: true,
		lowercase: true,
		required: [true, "Username is required!"],
		match: [/^[a-z0-9_\-\.]{3,15}$/gi, "Please fill a valid username."], // TODO: Return a better message
	},
	name: {
		first: {type: String},
		last: {type: String},
	},
	password: {
		type: String,
		required: true,
	},
	wallets: [
		{
			coin: {
				type: String,
				required: true,
				uppercase: true,
				match: [/(SOL)|(ETH)/gi, "Please fill a valid coin."], // TODO: Return a better message
			},
			wallet: {
				type: String,
				required: true,
			},
		},
	],
});

UserSchema.pre("save", (next) => {
	const user: any = this;
	if (!user.isModified("password")) return next();

	bcrypt.hash(user.password, 10, (err, hash) => {
		if (err) return next(err);

		user.password = hash;
		next();
	});
});

UserSchema.methods.comparePassword = function (candidatePassword: string, callback: Function) {
	bcrypt.compare(candidatePassword, this.password, function (err, isMatch) {
		if (err) return callback(err);
		callback(null, isMatch);
	});
};

function validateEmail(email: string): boolean {
	var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	return re.test(email);
}

export default mongoose.model("User", UserSchema);
