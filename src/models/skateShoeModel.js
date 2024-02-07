
const mongoose = require('mongoose');
const { skateShoeSizeSchema } = require('./sizingModels/skateShoeSizeModel');

const skateShoeSchema = new mongoose.Schema({
    shoeBrand: String,
    shoeName: String,
    shoeSizes: skateShoeSizeSchema
});

const SkateShoeModel = mongoose.model(
    'SkateShoe',
    skateShoeSchema
);

function createSkateShoe(skateShoe) {
    const createSkateShoe = new SkateShoeModel(skateShoe);
    return createSkateShoe.save();
}

function getSkateShoe() {
    return SkateShoeModel.find();
}

module.exports = {
    createSkateShoe,
    getSkateShoe
};