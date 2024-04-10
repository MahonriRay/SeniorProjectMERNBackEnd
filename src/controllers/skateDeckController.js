/**
 * @author Mahonri Ray
 * @file skateDeckController.js
 * @description This file will contain all of the logic for the skateDeckController.
 */

const skateDeckModel = require('../models/skateDeckModel');


/**
 * @param {Object} req 
 * @param {Object} res 
 * @description HTTP call will take in skate deck object and will use the skateDeckModel to create a new skate deck.
 */
async function newSkateDeck(req, res) {
    try {
        const newSkateDeck = req.body;
        const skateDeck = await skateDeckModel.CreateSkateDeck(newSkateDeck);
        res.status(200).send(skateDeck);
    } catch (e) {
        console.error(e);
        res.status(500).send(e);
    }
}

async function getSkateDeckURL(req, res) {
    try {
        const deckID = req.params.deckID;
        const skateDeck = await skateDeckModel.getSkateDeckByUrl(deckID);
        res.status(200).send(skateDeck);
    } catch {
        console.error(e);
        res.status(500).send(e);
    }
}


async function getSkateDeck(req, res) {
    try {
        const skateDeck = await skateDeckModel.getSkateDeck();
        res.status(200).send(skateDeck);
    } catch (e) {
        console.error(e);
        res.status(500).send(e);
    }
}

module.exports = {
    newSkateDeck,
    getSkateDeck,
    getSkateDeckURL
}