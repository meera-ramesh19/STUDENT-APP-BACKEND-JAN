const express = require('express');

const app = express();

const studentsController = require('./controllers/studentsController.js');

app.use('/students', studentsController);

app.get('/', (req, res) => {

  res.send('Hello World');
});

module.exports = app;
