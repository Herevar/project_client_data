const express = require('express')

const clientRouter = express.Router();

clientRouter
    .get('/', (req,res)=> {
        res.send('jest ok!')
    })




module.exports = {clientRouter}