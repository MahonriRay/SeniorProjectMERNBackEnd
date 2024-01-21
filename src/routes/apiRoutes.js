/**
 * @file apiRoutes.js
 * @author Mahonri Ray
 * @description This file will route all API requests.
 */

const express = require('express');
const router = express.Router();

const skateDeckController = require('../controllers/skateDeckController');

router.post('/addSkateDeck', skateDeckController.newSkateDeck);

// app.get('/', (req, res) => {
//     res.send('Hello, Express!');
//   });

module.exports = router;