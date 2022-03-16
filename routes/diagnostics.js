const diagnostics = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { readAndAppend, readFromFile } = require('../helpers/fsUtils');

// GET Route for retrieving diagnostic information
diagnostics.get('/', (req, res) => {
  // TODO: Logic for sending all the content of db/diagnostics.json
  readFromFile('./db/diagnostics.json')
  .then((data) =>{
    res.json(json.parse(data));
  })
});

// POST Route for a error logging
diagnostics.post('/', (req, res) => {
  // TODO: Logic for appending data to the db/diagnostics.json file
  const {isValid, errors,} = req.body;
  console.log(req.body);
  if(time && error_id && errors) {
    const currentDiag = {
      isValid,
      errors,
      time: new Date.now(),
      error_id: uuidv4()
    }
    readAndAppend(currentDiag, './db/diagnostics.json')

    const response = {
      status: 'Diagnostic',
      body: currentDiag
    }
    res.join(response);
  }else {
    res.json('Error in diagnostic')
  }
});

module.exports = diagnostics;
