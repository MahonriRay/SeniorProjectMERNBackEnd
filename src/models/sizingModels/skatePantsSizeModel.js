
const mongoose = require('mongoose');

const skatePantsSizeSchema = new mongoose.Schema({
    pantsSize26: Number,
    pantsSize28: Number,
    pantsSize30: Number,
    pantsSize32: Number,
    pantsSize34: Number,
    pantsSize36: Number,
    pantsSize38: Number,
    pantsSize40: Number,
    pantsSize42: Number,
    pantsSize44: Number
})

module.exports = {
    skatePantsSizeSchema
};