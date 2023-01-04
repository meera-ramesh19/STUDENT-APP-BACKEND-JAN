const express = require('express');
const nameController = express.Router();

const { repeatNTimesWithSpace, capitalizeFirstLetter } = require('../utils/stringUtils');


nameController.get('/capitalizeName/:name/', (req, res) => {
    try {
      //get name
      const name = req.params.name;
      //get times
      const times = req.params.times;
  
      //get result 0f stringntimes
      const capitalizedeName = capitalizeFirstLetter(name)
      //send response of repeatedNames of stringntimes
       res.send(capitalizedeName );
    } catch (err) {
      res.status(500).send(' An Error occured');
    }
  });
  
nameController.get('/:name/:times', (req, res) => {
  try {
    //get name
    const name = req.params.name;
    //get times
    const times = req.params.times;

    //get result 0f stringntimes
    const repeatedNames  = repeatNTimesWithSpace(name, times)
    //send response of repeatedNames of stringntimes
     res.send(repeatedNames);
  } catch (err) {
    res.status(500).send(' An Error occured');
  }
});



module.exports = nameController;
