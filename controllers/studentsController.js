const express = require('express');

//Router is a constructor
const controller = express.Router();

const studentData = require('../studentData.json')


controller.get('/:id', (req, res) => {

try{
  const studentId = req.params.id

//   if(typeof studentId !== 'number'){
 if (!/[0-9]/.test(studentId)){
    res.json('studentId must be a Number');
  }
  const singleStudent = studentData.students.find((student)=>{return studentId=== student.id
  });

  if( singleStudent ){
     res.json( singleStudent )
  }else{
    res.send(`No Student with given Id Number ${studentId} found`)
  }
}catch(err){
    res.status(500).send('An error occured')
}
});

//arguments for the get method is string and callback
controller.get('/',(req,res)=>{
    res.json(studentData)
})



module.exports = controller;
