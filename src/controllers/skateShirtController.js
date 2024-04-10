/**
 * @author Mahonri Ray
 * @file skateShirtController.js
 * @description This file will contain all of the logic for the skateShirtController.
 */
const skateShirtModel = require('../models/skateShirtModel');

/**
 * @author Mahonri Ray
 * @param {Object} req
 * @param {Object} res
 */
async function newSkateShirt(req, res) {
    try {
        const newSkateShirt = req.body;
        const skateShirt = await skateShirtModel.CreateSkateShirt(newSkateShirt);
        res.status(200).send(skateShirt);
    } catch (e) {
        console.error(e);
        res.status(500).send(e);
    }
}

/**
 * @author Mahonri Ray
 * @param {Key Value Pair} req //MongoDB .find() method
 * @param {Object} res //returns the skateShirt object
 */
async function getSkateShirt(req, res) {
    try {
        const skateShirt = await skateShirtModel.getSkateShirt();
        res.status(200).send(skateShirt);
    } catch (e) {
        console.error(e);
        res.status(500)
    }
}

async function getSkateShirtURL(req, res) {
    try {
        const shirtID = req.params.shirtID;
        const skateShirt = await skateShirtModel.getSkateShirtByUrl(shirtID);
        res.status(200).send(skateShirt);
    } catch {
        console.error(e);
        res.status(500).send(e);
    }
}

module.exports = {
    newSkateShirt,
    getSkateShirt,
    getSkateShirtURL
}