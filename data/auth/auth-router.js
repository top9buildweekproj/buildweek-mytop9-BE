const express = require('express'); 
const db = require('../users/users-model.js'); 
const router = express.Router();
const bcrypt = require('bcryptjs');
const tokens = require('../auth/authMW.js');

//adds user and returns the id for the user
//tests to make sure there is a username and a password before trying to insert
router.post('/register', async(req, res) => {

    if(!req.body.username) {
        res.status(500).json('you didn\'t give me a username')
    }

    if(!req.body.password) {
        res.status(500).json('you didn\'t give me a password');
    } 
    
    else {

        let user = req.body;
        const hash = bcrypt.hashSync(user.password, 10);
        user.password = hash;

        try {
            const User = await db.addUser(user);
            res.status(201).json(User); 
        } catch (e) {
            res.status(500).json({
                message: 'unable to add user' , e
            })
        }
    }
});

router.post('/login', async(req, res) => {
    let { username, password } = req.body;

    const user = await db.getBy({ username });
    
    try{
        if(user && bcrypt.compareSync(password, user.password)) {
            const token = tokens.genAToken(user);
            res.status(200).json({ token });
        } else {
            res.status(401).json({ message: 'Invalid Credentials' })
        }
    } catch (e) {
        res.status(500).json(e)
    }
});

module.exports = router