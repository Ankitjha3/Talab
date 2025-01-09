const mongoose = require('mongoose');

// User schema
const userSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    isVerified: { type: Boolean, default: false },
    dateJoined: { type: Date, default: Date.now }
});

// Export the model
module.exports = mongoose.model('User', userSchema);
