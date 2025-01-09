const mongoose = require('mongoose');

// Profile schema
const profileSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    bio: { type: String, default: '' },
    gender: { type: String, enum: ['Male', 'Female', 'Other'], required: true },
    interests: [{ type: String }],
    location: { type: String, required: true },
    dateOfBirth: { type: Date, required: true },
    dateUpdated: { type: Date, default: Date.now }
});

// Export the model
module.exports = mongoose.model('Profile', profileSchema);
