const Profile = require('../models/Profie');
const User = require('../models/Users');

// Create or update user profile
exports.createOrUpdateProfile = async (req, res) => {
    const { bio, gender, interests, location, dateOfBirth } = req.body;
    const userId = req.userId; // From JWT token

    try {
        let profile = await Profile.findOne({ userId });

        if (profile) {
            // Update profile if it exists
            profile.bio = bio;
            profile.gender = gender;
            profile.interests = interests;
            profile.location = location;
            profile.dateOfBirth = dateOfBirth;
            profile.dateUpdated = Date.now();

            await profile.save();
            return res.json({ message: 'Profile updated successfully' });
        } else {
            // Create new profile
            profile = new Profile({
                userId,
                bio,
                gender,
                interests,
                location,
                dateOfBirth
            });

            await profile.save();
            res.status(201).json({ message: 'Profile created successfully' });
        }
    } catch (error) {
        res.status(500).json({ message: 'Server error' });
    }
};
