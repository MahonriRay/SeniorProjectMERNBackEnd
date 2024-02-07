/**
 * @file app.js
 * @author Mahonri Ray
 * @description This file is the entry point for the application.
 * @Date 1/18/2024
 */


const express = require('express');
const app = express();
const dotenv = require('dotenv');
const connect = require('./config/database.js');
const apiRoutes = require('./routes/apiRoutes');


const path = require('path');

// Get the current working directory (src folder in this case)
const currentWorkingDirectory = process.cwd();
console.log('Current Working Directory: ', currentWorkingDirectory);

console.log('Environment Var Path: ',process.cwd().toString());

dotenv.config();

const port = process.env.PORT;
const URI = process.env.MONGO_URI;

console.log(URI);
connect(URI);

app.use(express.json());
app.use('/', apiRoutes);



app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});


// Construct the path to the parent directory
// const parentDirectory = path.resolve(currentWorkingDirectory, '..');

// Change the working directory to the parent directory
// process.chdir(parentDirectory);