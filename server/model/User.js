const mongoose = require('mongoose');

// Define schema
const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String
});

// Create model
const UserModel = mongoose.model("Users", UserSchema);

// Export model
module.exports = UserModel;
