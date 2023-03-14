const express = require('express');
const { urlencoded } = require('express');
const app = require('express');
const hbs = require('express-handlebars')

app = expersss();
app.use(express.urlencoded({
    extends : true
}));
app.use(express.json())
add.use(express.static('public'))
app.engine(".hbs", hbs.engine({ 
  extname: ".hbs",  
//   helpers: handlebarsHelpers, 
    }));
app.set("view engine", ".hbs");
app.set("views", "./views");


app.get('/', (req,res)=>{
    res.render('test')
})



app.listen(3000, 'localhost', ()=> {console.log("listening on localhost 3000")})
