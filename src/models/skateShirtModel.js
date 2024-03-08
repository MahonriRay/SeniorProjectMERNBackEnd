/**
 * @author Mahonri Ray
 * @file skateShirtModel.js
 * @description This file will contain the model for the SkateShirt collection.
 * @date 1/25/2024
 */
const mongoose = require('mongoose');
const { skateShirtSizeSchema } = require('./sizingModels/skateShirtSizeModel'); 

const skateShirtSchema = new mongoose.Schema({
    shirtBrand: String,
    shirtName: String,
    shirtSizes: skateShirtSizeSchema
});

const SkateShirtModel = mongoose.model(
    'SkateShirt',
    skateShirtSchema
);

/**
 *  @param {Object} skateShirt  
 *  @returns {Promise} SkateShirtModel
 *  @description This function will create a new skate shirt and will return the newly created skate shirt.
 */
function CreateSkateShirt(skateShirt) {
    const createSkateShirt = new SkateShirtModel(skateShirt);
    return createSkateShirt.save();
}

function getSkateShirt() {
    return SkateShirtModel.find();
}

function getSkatePants(){
    return SkateShirtModel.find();
}

module.exports = {
    CreateSkateShirt,
    getSkateShirt,
    getSkatePants
};