
const SkatePantsModel = require('../models/skatePantsModel');

async function newSkatePants(req, res) {
    try {
        const newSkatePants = req.body;
        const skatePants = await SkatePantsModel.createSkatePants(newSkatePants);
        res.status(200).send(skatePants);
    } catch (e) {
        console.error(e);
        res.status(500).send(e);
    }
}

async function getSkatePants(req, res) {
    try {
        const skatePants = await SkatePantsModel.getSkatePants();
        res.status(200).send(skatePants);
    } catch (e) {
        console.error(e);
        res.status(500).send(e);
    }
}

module.exports = {
    newSkatePants,
    getSkatePants
};