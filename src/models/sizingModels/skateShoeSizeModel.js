
const mongoose = require('mongoose');

const skateShoeSizeSchema = new mongoose.Schema({
    shoeSize7: Number,
    shoeSize7_5: Number,
    shoeSize8: Number,
    shoeSize8_5: Number,
    shoeSize9: Number,
    shoeSize9_5: Number,
    shoeSize10: Number,
    shoeSize10_5: Number,
    shoeSize11: Number,
    shoeSize11_5: Number,
    shoeSize12: Number,
    shoeSize12_5: Number,
    shoeSize13: Number,
    shoeSize13_5: Number
})

module.exports = {
    skateShoeSizeSchema
};