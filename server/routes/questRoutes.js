const express = require('express');
const router = express.Router();

// GET all quests
router.get('/', (req, res) => {
    res.send('Retrieve all quests');
});

// POST a new quest
router.post('/', (req, res) => {
    res.send('Create a new quest');
});

// GET a specific quest by ID
router.get('/:questId', (req, res) => {
    res.send(`Retrieve quest with ID: ${req.params.questId}`);
});

// PUT to update a quest by ID
router.put('/:questId', (req, res) => {
    res.send(`Update quest with ID: ${req.params.questId}`);
});

// DELETE a quest by ID
router.delete('/:questId', (req, res) => {
    res.send(`Delete quest with ID: ${req.params.questId}`);
});

module.exports = router;