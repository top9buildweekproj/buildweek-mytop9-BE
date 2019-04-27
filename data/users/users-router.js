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

//adds user and returns the id for the user
//tests to make sure there is a username and a password before trying to insert
router.post('/', async(req, res) => {
    if(!req.body.username) {
        res.status(500).json('you didn\'t give me a username')
    }
    if(!req.body.password) {
        res.status(500).json('you didn\'t give me a password')
    } else {
        try {
            const user = await db.addUser(req.body);
            res.status(200).json(user) 
        } catch (e) {
            res.status(500).json({
                message: 'unable to add user' , e
            })
        }
    }
})

router.post('/users/:id', async ( req, res ) => {
    //checks to make sure body contains cat_id and sub_id before attempting post
    if(!req.body.cat_id) {
        res.status(500).json({
            message: 'you are missing the cat_id'
        })
    }
    if(!req.body.sub_id) {
        res.status(500).json({
            message: 'you are missing the sub_id'
        })
    }
    //pulls id from header and sets it as the user_id for the request body
    req.body.user_id = req.params.id

    try {
        const list = await db.addSubcategory(req.params.id, req.body)
        res.status(200).json(list)
    } catch (e) {
        res.status(500).json({
            error: e.message
        })
    }
})

router.delete('/list/:listid', async(req, res) => {
    try{
        const deleted = await db.removeList(req.params.listid)
        res.status(200).json(deleted)
    } catch (e) {
        res.status(500).json({
            error: e.message
        })
    }
})

module.exports = router