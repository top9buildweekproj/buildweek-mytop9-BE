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

// router.post('/users/:id', async ( req,res ) => {
//     try {
//         const userId = req.params.id;
    
//         const list = await db.insert(req.params.id, req.body)
//         res.status(200).json(list);
//         // if(req.body) {
//         //     res.status(200).json(list);
//         // } else {
//         //     res.status(500).json({
//         //         message: 'you didn\'t give me any thing man'
//         //     })
//         // }
//     } catch (e) {
//         res.status(500).json({
//             message: 'could not add item to list'
//         })
//     }
    
// })

module.exports = router