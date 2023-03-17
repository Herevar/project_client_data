const express = require('express');
const { db } = require('../utils/db');

const clientRouter = express.Router();

clientRouter
    .get('/', (req,res)=> {
        res.render('clients/listOf', {
            clients : db.getall(),
        })
    })
    .get('/:id', (req,res)=> {
        res.render('clients/one',{
           client : db.getOne(req.params.id)
        })
    })
    
    .post('/', (req,res)=> {
        res.send('dodaj!')
    })

    .put('/id', (req,res)=> {
        res.send('zmodyfikuj!')
    })
    
    .delete('/:id', (req,res)=> {
        res.send('usun!1!')      
    })
    //trzeba zainstalowac (npm i method-override), pobrac moduł i uzyc middleware'a z odpowiednia metoda "_method"



module.exports = {clientRouter}