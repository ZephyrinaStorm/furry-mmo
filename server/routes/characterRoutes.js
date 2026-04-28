const express = require('express');
const router = express.Router();

// Mock database
let characters = [];

// POST /create - Create a new character
router.post('/create', (req, res) => {
    const character = req.body;
    characters.push(character);
    res.status(201).json(character);
});

// GET /:id - Get a character by id
router.get('/:id', (req, res) => {
    const character = characters.find(c => c.id === req.params.id);
    if (character) {
        res.json(character);
    } else {
        res.status(404).send('Character not found');
    }
});

// PUT /:id - Update a character by id
router.put('/:id', (req, res) => {
    const index = characters.findIndex(c => c.id === req.params.id);
    if (index !== -1) {
        characters[index] = {...characters[index], ...req.body};
        res.json(characters[index]);
    } else {
        res.status(404).send('Character not found');
    }
});

// DELETE /:id - Delete a character by id
router.delete('/:id', (req, res) => {
    const index = characters.findIndex(c => c.id === req.params.id);
    if (index !== -1) {
        characters.splice(index, 1);
        res.status(204).send();
    } else {
        res.status(404).send('Character not found');
    }
});

module.exports = router;
