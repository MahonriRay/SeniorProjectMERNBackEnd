
const mongoose = require('mongoose');

const skateTrucksSchema = new mongoose.Schema({
    truckBrand: String,
    truckName: String,
    truckSize: Number
});

const SkateTrucksModel = mongoose.model(
    'SkateTrucks',
    skateTrucksSchema
);


/**
 * 
 * @param {*} skateTrucks 
 * @returns {Promise} SkateTrucksModel
 * @description This function will create a new skate truck and will return the newly created skate truck.
 */
function createSkateTrucks(skateTrucks) {
    const createSkateTrucks = new SkateTrucksModel(skateTrucks);
    return createSkateTrucks.save();
};

function getSkateTrucks() {
    return SkateTrucksModel.find();
}

module.exports = {
    createSkateTrucks,
    getSkateTrucks
};

