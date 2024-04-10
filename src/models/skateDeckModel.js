/**
 * @author Mahonri Ray
 * @file skateDeckModel.js
 * @description This file will contain the model for the SkateDeck collection.
 * @date 1/18/2024
 */
const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const skateDeckSchema = new mongoose.Schema({
    deckBrand: String,
    deckName: String,
    deckWidth: Number,
    quantity: Number,
    url: String,
    price: Number,
    deckID: {type: String, default: uuidv4()}
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

function getSkateDeckByUrl(deckName) {
    return SkateDeckModel.find({deckName: deckName});
}

module.exports = { 
    CreateSkateDeck,
    getSkateDeck,
    getSkateDeckByUrl
};