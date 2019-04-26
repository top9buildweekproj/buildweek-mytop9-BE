const express = require('express'); //requiring express
// const db = require('./users-model.js'); //requiring our database query function model
const router = express.Router(); //creating our Router

router.use(express.json()); //telling our router to use express and allow it to send/receive json strings/format

//test get to confirm it is working; 
//dont have to use /users since we defined this route in server.js '/' is the equivalent of /users
router.get('/', (req, res) => {
    res.send('Hello from users!')
});

module.exports = router