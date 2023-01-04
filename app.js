const express = require('express');

const app = express();

const studentsController = require('./controllers/studentsController.js');
const nameController =  require('./controllers/nameController.js');

app.use('/students', studentsController);
app.use('/names', nameController);

app.get('/', (req, res) => {

  res.send('Hello World');
});

module.exports = app;
