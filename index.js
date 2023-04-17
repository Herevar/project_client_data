const express = require('express');
const { urlencoded } = require('express');
const hbs = require('express-handlebars');
const methodOverride = require('method-override')
const { clientRouter } = require('./routers/client');
const { homeRouter } = require('./routers/home');
const { db } = require('./utils/db');


const app = express();

app.use(methodOverride('_method'))
app.use(express.urlencoded({  //uzywamy TYLKO przy przesyłaniu formularzu przez przegladarke (form w html itd - zeby odkodowac sposob przesyły tego formatu)                         
    extends : true  //zadko sie tego uzywa musi byc tez "extends:true"
}));
app.use(express.json())
app.use(express.static('public')) // czyli to jako tako nie jest potrzebne ; statyczne to strony poszczegolne
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
        {"name":"aghatata",
        "email" : "a@pl", }
    )
   res.send('poszło /test ')
})

//jebane porty - jak pozamykac
app.listen(3005, 'localhost', ()=> {console.log("listening on localhost 3015")})
//package.json// "start": "npx nodemon index.js"

//npx kill-port XXXX