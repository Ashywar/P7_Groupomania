const mongoose = require("mongoose");
const { isEmail } = require("validator");
const uniqueValidator = require("mongoose-unique-validator"); // package vérification d'un email unique
const { passwordSchema } = require("./password");

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      validate: [isEmail],
      lowercase: true,
      unique: true, // unique -> une adresse mail = un user
      trim: true,
    },
    password: {
      type: String,
      required: true,
      max: 50,
      minlength: 6,
      passwordSchema,
    },
    isAdmin: { type: Boolean },
  },
  {
    timestamps: true,
  }
);

userSchema.plugin(uniqueValidator); // utilisation du package
const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;
