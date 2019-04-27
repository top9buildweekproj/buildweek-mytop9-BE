const express = require('express'); //requiring express
const db = require('./users-model.js'); //requiring our database query function model
const router = express.Router(); //creating our Router

router.use(express.json()); //telling our router to use express and allow it to send/receive json strings/format

//test get to confirm it is working; 
//dont have to use /users since we defined this route in server.js '/' is the equivalent of /users
// router.get('/', (req, res) => {
//     res.send('Hello from users!')
// });

router.get('/', async(req, res) => {
    try{
        const user = await db.get();
        res.status(200).json(user)
    } catch (e) {
        res.status(500).json({
            message: 'could not load users'
        })
    }
});

router.get('/:id', async(req, res) => {
    try{
        const user = await db.getById(req.params.id);
        res.status(200).json(user)
    } catch (e) {
        res.status(500).json({
            message: 'could not load user'
        })
    }
})

router.get('/users/:id', async(req, res) => {
    try {
        const user = await db.getUsersList(req.params.id);
        res.status(200).json(user);
    } catch (e) {
        res.status(500).json({
            message: 'could not load users'
        })
    }
})

module.exports = router