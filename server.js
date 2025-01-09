const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const path = require('path'); // We need this to resolve file paths

dotenv.config();

const app = express();

// Middleware to serve static files from the /public directory
app.use(express.static(path.join(__dirname, 'public')));

// MongoDB connection
const mongoURI = process.env.MONGODB_URI || 'mongodb+srv://aadityabanwari1312023:JR4abIyv04q7vM43@cluster0.wrkfb.mongodb.net/'; // Replace with your actual URI
mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.log('MongoDB connection error:', err));

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html')); // Serve the homepage (index.html)
});

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'register.html')); // Serve the registration page
});

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html')); // Serve the login page
});

// Start server
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
