const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: [true, "Username cannot be blank!"],
  },
  email: {
    type: String,
    required: [true, "Add valid email address"],
  },
  password: {
    type: String,
    required: [true, "Password cannot be blank"],
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
