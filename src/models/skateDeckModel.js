/**
 * @author Mahonri Ray
 * @file skateDeckModel.js
 * @description This file will contain the model for the SkateDeck collection.
 * @date 1/18/2024
 */
const mongoose = require('mongoose');

const skateDeckSchema = new mongoose.Schema({
    deckBrand: String,
    deckName: String,
    deckWidth: Number,
    quantity: Number
})

const SkateDeckModel = mongoose.model(
    'SkateDeck',
    skateDeckSchema
);

/**
 * @param {Object} skateDeck 
 * @returns {Promise} SkateDeckModel
 * @description This function will create a new skate deck and will return the newly created skate deck.
 */
function CreateSkateDeck(skateDeck) {
    const createSkateDeck = new SkateDeckModel(skateDeck);
    return createSkateDeck.save();
}

function getSkateDeck() {
    return SkateDeckModel.find();
}

module.exports = { 
    CreateSkateDeck,
    getSkateDeck
};