const express = require('express');
const app = express();

app.use(express.urlencoded({extended : true}));
app.set('view engine','hbs');

var items = [];

const srv_port = process.env.PORT || 4444;

app.get('/',(req,res) => {
    let tasklist = items.map(t => `<li>${t}</li>`)
    res.render('index',{task : items});
})

app.post('/abc',(req,res) => {
    items.unshift(req.body.item);
    res.redirect('/');
})

app.listen(srv_port,() => {
    console.log('Serverhas started at the http://localhost:4444');
})
