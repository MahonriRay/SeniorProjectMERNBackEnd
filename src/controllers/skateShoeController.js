/**
 * @author Mahonri Ray
 * @file skateShoeController.js
 * @description This file will contain all of the logic for the skateShoeController.js
 */
const skateShoeModel = require('../models/skateShoeModel');

async function newSkateShoe(req, res) {
    try {
        const newSkateShoe = req.body;
        const skateShoe = await skateShoeModel.createSkateShoe(newSkateShoe);
        res.status(200).send(skateShoe);
    } catch (e) {
        console.error(e);
        res.status(500).send(e);
    }
}

async function getSkateShoe(req, res) {
    try {
        const skateShoe = await skateShoeModel.getSkateShoe();
        res.status(200).send(skateShoe);
    } catch (e) {
        console.error(e);
        res.status(500).send(e);
    }
}

async function getSkateShoeByUrl(req, res) {
    try {
        const shoeID = req.params.shoeID;
        const skateShoe = await skateShoeModel.getSkateShoeByUrl(shoeID);
        res.status(200).send(skateShoe);
    } catch (e) {
        console.error(e);
        res.status(500).send(e);
    }
}

module.exports = {
    newSkateShoe,
    getSkateShoe,
    getSkateShoeByUrl
}