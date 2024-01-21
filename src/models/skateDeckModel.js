const mongoose = require('mongoose');

const skateDeckSchema = new mongoose.Schema({
    deckBrand: String,
    deckName: String,
    deckWidth: Number
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

module.exports = { 
    CreateSkateDeck
};