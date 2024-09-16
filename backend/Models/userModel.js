const mongoose = require("mongoose");

// The schema for storing user data
// ************************************************************************************************
const user = new mongoose.Schema({
    Firstname: {
      type: String,
      required: true,
      maxLength: 30,
      minLength: 3,
    },
    Lastname: {
      type: String,
      required: true,
      maxLength: 30,
      minLength: 3,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      minLength: 8,
    },
    profileImageUrl: {
      type: String,
      //   required: true,
      default: "SOME GENERIC IMAGE URL",
    },
    role: {
      type: String,
      default: "user",
      enum: ["user", "admin"],
    },
    date: {
      type: Date,
      default: Date.now
    }
  });
  module.exports = mongoose.model("User", user);
  // ************************************************************************************************