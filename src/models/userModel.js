
const e = require('express');
const mongoose = require ('mongoose');
const { v4: uuidv4 } = require('uuid');

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    admin: {type: Boolean, default: false},
    userId: {type: String, default: uuidv4()}
});

const UserModel = mongoose.model(
    'User',
    userSchema
);

function createUser(user) {
    const createUser = new UserModel(user);
    return createUser.save();
}

async function getUser(email) {
    try {
        const user = await UserModel.findOne({ email: email })
            .exec();
            return user;
    } catch (error) {
        console.error(error);
    }
    
    return UserModel.find({ email: email });
}

module.exports = {
    createUser,
    getUser
};