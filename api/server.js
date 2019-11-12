const express = require('express');
const helmet = require('helmet');
const cors = require('cors');

const db = require('../database/dbConfig.js')
const coachesRouter = require('../routes/coach-routes.js')


// const register = require('../auth-routes/register.js')
// const login =require('../auth-routes/login.js')
// const usersRouter = require('../routes/users-route')


const server=express()

// 3rd PARTY MIDDLEWARE
server.use(helmet());
server.use(express.json());
server.use(cors());
server.use('/api/coaches',coachesRouter)


// TEST SERVER
server.get('/',(req,res) => {
    res.status(200).json({
        message:'Server is up'
    })
})


 module.exports = server;