const express = require('express');
const router = express.Router();

// Guild routes
router.get('/guild', (req, res) => {
    res.send('Guild endpoint');
});

router.post('/guild', (req, res) => {
    res.send('Create a new guild');
});

// Party routes
router.get('/party', (req, res) => {
    res.send('Party endpoint');
});

router.post('/party', (req, res) => {
    res.send('Create a new party');
});

// Friends routes
router.get('/friends', (req, res) => {
    res.send('Friends endpoint');
});

router.post('/friends', (req, res) => {
    res.send('Add a new friend');
});

module.exports = router;