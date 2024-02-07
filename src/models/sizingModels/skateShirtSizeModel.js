
const mongoose = require('mongoose');

const skateShirtSizeSchema = new mongoose.Schema({
    shirtSizeS: Number,
    shirtSizeM: Number,
    shirtSizeL: Number,
    shirtSizeXL: Number,
    shirtSizeXXL: Number
})

const SkateShirtSizeModel = mongoose.model(
    'SkateShirtSize',
    skateShirtSizeSchema
);

module.exports = {
    skateShirtSizeSchema
};