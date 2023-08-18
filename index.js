const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const Confession = require('./models/confession');
const methodOverride = require('method-override');

main().catch(err => console.log(err));

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/confessionsApp');
    console.log("MONGO CONNECTED OPEN!!!");
}


app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));


app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs');

app.get('/confessions', async (req, res) => {
    const confessions = await Confession.find({});
    res.render('confessions/index', {confessions});
});

app.get('/confessions/new', (req, res) => {
    res.render('confessions/new');
});


app.get('/confessions/:id', async (req, res) => {
    const { id } = req.params;
    const confession = await Confession.findById(id);
    res.render('confessions/preview', { confession });
});

app.get('/confessions/:id/edit', async (req, res) => {
    const confession = await Confession.findById(req.params.id)
    res.render('confessions/edit', { confession });
});

app.put('/confessions/:id', async (req, res) => {
    const { id } = req.params;
    console.log(req.body.confy);
    const confession = await Confession.findByIdAndUpdate(id, { ...req.body.confy});
    res.redirect(`/confessions/${confession._id}`);
});


app.listen(3000, ()=>{
    console.log("APP IS LISTENING ON PORT 3000!");
});
