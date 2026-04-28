'use strict';
const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    created_at: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Player', playerSchema);