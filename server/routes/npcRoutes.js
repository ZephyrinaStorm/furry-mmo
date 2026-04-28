const express = require('express');
const router = express.Router();

// Endpoint to get all NPCs
router.get('/npcs', (req, res) => {
    // Logic to fetch all NPCs from the database
    res.json({ message: 'Retrieve all NPCs' });
});

// Endpoint to get a specific NPC by ID
router.get('/npcs/:id', (req, res) => {
    const npcId = req.params.id;
    // Logic to fetch a specific NPC from the database
    res.json({ message: `Retrieve NPC with ID: ${npcId}` });
});

// Endpoint to create a new NPC
router.post('/npcs', (req, res) => {
    const newNpc = req.body;
    // Logic to create a new NPC in the database
    res.status(201).json({ message: 'NPC created', npc: newNpc });
});

// Endpoint to update an existing NPC
router.put('/npcs/:id', (req, res) => {
    const npcId = req.params.id;
    const updatedNpc = req.body;
    // Logic to update an existing NPC in the database
    res.json({ message: `NPC with ID: ${npcId} updated`, npc: updatedNpc });
});

// Endpoint to delete an NPC
router.delete('/npcs/:id', (req, res) => {
    const npcId = req.params.id;
    // Logic to delete an NPC from the database
    res.json({ message: `NPC with ID: ${npcId} deleted` });
});

module.exports = router;