const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const Confession = require('./models/confession');

main().catch(err => console.log(err));

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/confessionsApp');
    console.log("MONGO CONNECTED OPEN!!!");
}


app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs');

app.get('/conf', async (req, res) => {
    const confessions = await Confession.find({});
    res.render('products/index', {confessions})
});

app.get('/conf/new', (req, res) => {
    res.render('products/new')
});


app.get('/conf/:id', async (req, res) => {
    const { id } = req.params;
    const confession = await Confession.findById(id);
    res.render('products/preview', { confession })
});

app.get('/conf/edit', (req, res) => {
    res.render('products/edit')
});


app.listen(3000, ()=>{
    console.log("APP IS LISTENING ON PORT 3000!");
});
