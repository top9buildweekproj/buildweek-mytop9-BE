const express = require('express'); //imports express
const cors = require('cors');
const helmet = require('helmet');

//router inputs:
const authRoute = require('../data/auth/auth-router.js')
const userRoute = require('../data/users/users-router.js');
const categoriesRoute = require('../data/categories/categories-router.js');

const server = express(); //creates our express server

server.use(helmet());
server.use(cors());
server.use(express.json());

server.get('/', (req, res) => {
    res.send('Hello World');
});

//config routes here:
server.use('/', authRoute);
server.use('/users', userRoute);
server.use('/categories', categoriesRoute);

module.exports = server;