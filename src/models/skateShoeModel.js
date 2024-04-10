
const mongoose = require('mongoose');
const { skateShoeSizeSchema } = require('./sizingModels/skateShoeSizeModel');
const { v4: uuidv4 } = require('uuid');

const skateShoeSchema = new mongoose.Schema({
    shoeBrand: String,
    shoeName: String,
    shoeSizes: skateShoeSizeSchema,
    url: [String],
    price: Number,
    shoeID: {type: String, default: uuidv4()}
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

function getSkateShoeByUrl(shoeName) {
    return SkateShoeModel.find({shoeName: shoeName});
}

module.exports = {
    createSkateShoe,
    getSkateShoe,
    getSkateShoeByUrl
};