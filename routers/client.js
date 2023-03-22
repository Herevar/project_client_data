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
    
    .delete('/del/:id', (req,res)=> {
        db.delete(req.params.id)
        res.render('clients/deleted') 
        //res.render(clients/hbs_z_usuwaniem_info_+_przekerowanie_gdzies_tam)    
    })
    //trzeba zainstalowac (npm i method-override), pobrac moduł i uzyc middleware'a z odpowiednia metoda "_method"
    
    .get('/form/add', (req,res)=> {
        res.render('clients/forms/add', {
            // clients : db.getall(),
        })
    })


module.exports = {clientRouter}

