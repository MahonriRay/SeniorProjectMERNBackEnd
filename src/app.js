/**
 * @file app.js
 * @author Mahonri Ray
 * @description This file is the entry point for the application.
 * @Date 6/6/2021
 */


const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello, Express!');
});


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});