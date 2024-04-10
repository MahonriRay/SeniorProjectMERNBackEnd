
const userModel = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');  

async function createUser(req, res) {
    try {
        const user = req.body;
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
        const newUser = await userModel.createUser(user);
        res.status(201).send(newUser);
    } catch (error) {
        res.status(500).send(error);
    }
}

async function login(req, res) {
    try {
        // console.log('REQ: ', req)
        const user = req.body;
        console.log('USER: ', user);
        const name = user.name;
        console.log('EMAIL: ', user.email);
        const userDB = await userModel.getUser(user.email);
        if (!userDB) {
            return res.status(404).send('User not found');
        }

        const validPassword = await bcrypt.compare(user.password, userDB.password);
        
        console.log('UserDB: ', userDB);
        console.log('UserDB __id: ', userDB.userId);
        console.log('UserDB name: ', userDB.name);
        const payload = {
            name: userDB.name,
            email: userDB.email,
            userId: userDB.userId,
            admin: userDB.admin
        };
        console.log('Payload: ', payload);
        if (validPassword) {
            const token = jwt.sign(payload, process.env.SECRET_KEY, {expiresIn: '1h'});
            console.log('Token: ', token);
            res.status(200)
            .json({ 
                name: userDB.name,
                userID: userDB.userId,
                admin: userDB.admin,
                token 
            });
            // return res.status(400).send('Invalid password');
        } else {
            res.status(400).send('Invalid password');
        }

        // res.status(200).send('Logged in');
    } catch (error) {
        res.status(500).send(error);
    }
}

async function decodeToken(req, res) {
    try {
        const token = req.body.token || req.query.token || req.headers['x-access-token'];
        if (!token) {
            return res.status(403).send({ auth: false, message: 'No token provided.' });
        }
        
        jwt.verify(token, process.env.SECRET_KEY, function(err, decoded) {
            if (err) {
                return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
            }
            // if everything good, save to request for use in other routes
            req.userId = decoded.id;
            res.status(200).send(decoded);
        });
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = {
    createUser,
    login,
    decodeToken
};