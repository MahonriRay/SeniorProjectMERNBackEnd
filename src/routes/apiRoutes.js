/**
 * @file apiRoutes.js
 * @author Mahonri Ray
 * @description This file will route all API requests.
 */

const express = require('express');
const router = express.Router();

const skateDeckController = require('../controllers/skateDeckController');
const skateShirtController = require('../controllers/skateShirtController');
const skateShoeController = require('../controllers/skateShoeController');
const skatePantsController = require('../controllers/skatePantsController');
const skateTruckController = require('../controllers/skateTruckController');  
const userController = require('../controllers/userController');  


router.post('/addUser', userController.createUser);
router.post('/addSkateDeck', skateDeckController.newSkateDeck);
router.post('/addSkateShirt', skateShirtController.newSkateShirt);
router.post('/addSkateShoe', skateShoeController.newSkateShoe);
router.post('/addSkatePants', skatePantsController.newSkatePants);
router.post('/addSkateTrucks', skateTruckController.newSkateTrucks);
router.post('/getUser', userController.login);

router.get('/getSkateDeck/:deckID', skateDeckController.getSkateDeckURL);
router.get('/getSkateShirt/:shirtID', skateShirtController.getSkateShirtURL);
router.get('/getSkateShoe/:shoeID', skateShoeController.getSkateShoeByUrl);
router.get('/getSkateDeck', skateDeckController.getSkateDeck);
router.get('/getSkateShirt', skateShirtController.getSkateShirt)
router.get('/getSkateShoe', skateShoeController.getSkateShoe);
router.get('/getSkatePants', skatePantsController.getSkatePants);
router.get('/getSkateTrucks', skateTruckController.getSkateTrucks);
router.get('/decodeToken', userController.decodeToken);

// app.get('/', (req, res) => {
//     res.send('Hello, Express!');
//   });

module.exports = router;