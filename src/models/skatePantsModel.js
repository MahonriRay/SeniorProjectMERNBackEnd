
const mongoose = require('mongoose');
const { skatePantsSizeSchema } = require('./sizingModels/skatePantsSizeModel');

const skatePantsSchema = new mongoose.Schema({
    pantsBrand: String,
    pantsName: String,
    pantsSizes: skatePantsSizeSchema
})

const SkatePantsModel = mongoose.model(
    'SkatePants',
    skatePantsSchema
);

function createSkatePants(skatePants) {
    const createSkatePants = new SkatePantsModel(skatePants);
    return createSkatePants.save();
}

function getSkatePants() {
    return SkatePantsModel.find();
}

module.exports = {
    createSkatePants,
    getSkatePants
};