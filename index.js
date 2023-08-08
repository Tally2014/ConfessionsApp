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

app.get('/conf', (req, res) => {
    res.send('Confesssing Right Now!!')
});

app.listen(3000, ()=>{
    console.log("APP IS LISTENING ON PORT 3000!");
});
