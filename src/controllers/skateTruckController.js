/**
 * @author Mahonri Ray
 * @file skateTruckController.js
 * @description This file will contain all of the logic for the skateTruckController.
 */
const skateTrucksModel = require('../models/skateTrucksModel');

async function newSkateTrucks(req, res) {
    try {
        const newSkateTrucks = req.body;
        const skateTrucks = await skateTrucksModel.createSkateTrucks(newSkateTrucks);
        res.status(200).send(skateTrucks);
    } catch (e) {
        console.error(e);
        res.status(500).send(e);
    }
};

async function getSkateTrucks(req, res) {
    try {
        const skateTrucks = await skateTrucksModel.getSkateTrucks();
        res.status(200).send(skateTrucks);
    } catch (e) {
        console.error(e);
        res.status(500).send(e);
    }
}

module.exports = {
    newSkateTrucks,
    getSkateTrucks
};
