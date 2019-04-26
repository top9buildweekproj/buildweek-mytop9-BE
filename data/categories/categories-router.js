const express = require('express'); //requiring express
const db = require('./categories-model.js'); //requiring our database query function model
const router = express.Router(); //creating our Router

router.use(express.json()); //telling our router to use express and allow it to send/receive json strings/format
//test get to confirm it is working; 
//dont have to use /categories since we defined this route in server.js '/' is the equivalent of /categories
// router.get('/', (req, res) => {
//     res.send('Hello from categories!')
// });

router.get('/', async(req, res) => {
    try{
        const cat = await db.get();
        res.status(200).json(cat)
    } catch (e) {
        res.status(500).json({
            message: 'could not load categories'
        })
    }
});

router.get('/:id', async(req, res) => {
    try{
        const cat = await db.getById(req.params.id);
        res.status(200).json(cat)
    } catch (e) {
        res.status(500).json({
            message: 'could not load categories'
        })
    }
})

router.get('/categories/:id', async(req, res) => {
    try {
        const cat = await db.getSubCategories(req.params.id);
        res.status(200).json(cat);
    } catch (e) {
        res.status(500).json({
            message: 'could not load categories'
        })
    }
})

module.exports = router