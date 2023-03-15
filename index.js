const express = require('express');
const { urlencoded } = require('express');
const hbs = require('express-handlebars');
const { clientRouter } = require('./routers/client');
const { homeRouter } = require('./routers/home');
const { db } = require('./utils/db');


const app = express();
app.use(express.urlencoded({
    extends : true
}));
app.use(express.json())
app.use(express.static('public'))
app.engine(".hbs", hbs.engine({ 
  extname: ".hbs",  
//   helpers: handlebarsHelpers, 
    }));
app.set("view engine", ".hbs");
app.set("views", "./views");



app.use('/', homeRouter)
app.use('/client', clientRouter)

app.get('/', (req,res)=>{
    res.render('test')
})
app.get('/test', (req,res)=>{
    db.create(
        {"name" : "pjoter",
        "email" : "test@pl", }
    )
   res.send('poszło /test ')
})


app.listen(3001, 'localhost', ()=> {console.log("listening on localhost 3001")})
