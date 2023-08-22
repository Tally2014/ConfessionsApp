const express = require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const Confession = require('./models/confession');
const methodOverride = require('method-override');
const ejsMate = require('ejs-mate');

main().catch(err => console.log(err));

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/confessionsApp');
    console.log("MONGO CONNECTED OPEN!!!");
}


app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(methodOverride('_method'));

app.engine('ejs', ejsMate);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs');

app.get('/confessions', async (req, res) => {
    const confessions = await Confession.find({});
    res.render('confessions/index', {confessions});
});

app.get('/confessions/new', (req, res) => {
    res.render('confessions/new');
});

app.post('/confessions', async (req, res) => {
    const confession = new Confession({
        postTitle: req.body.postTitle,
        postConfession: req.body.postConfession,
        postHash:`AC-${formattedDate}-72945`,
        user:`confy${randomNumbersString}`  ,
        category:'general'  
    });
    
    await confession.save();
    res.redirect(`/confessions/${confession._id}`)
})


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
    const confession = await Confession.findByIdAndUpdate(id, { ...req.body.confy});
    res.redirect(`/confessions/${confession._id}`);
});

app.delete('/confessions/:id', async (req, res) => {
    const { id } = req.params;
    const deleteConfession = await Confession.findByIdAndDelete(id);
    res.redirect(`/confessions`);
});

app.listen(3000, ()=>{
    console.log("APP IS LISTENING ON PORT 3000!");
});


//Generate Current Date
function getCurrentDateAsString() {
    const currentDate = new Date();
    const year = currentDate.getFullYear().toString().slice(-2); // Last two digits of the year
    const month = (currentDate.getMonth() + 1).toString().padStart(2, '0'); // Month is zero-based
    const day = currentDate.getDate().toString().padStart(2, '0');
    
    return `${day}${month}${year}`;
}

const formattedDate = getCurrentDateAsString();


//Generate Random 10 Numbers
function generateRandomNumbersAsString() {
    let randomNumbersString = '';
    for (let i = 0; i < 10; i++) {
        const randomNumber = Math.floor(Math.random() * 10); // Generates a single-digit random number
        randomNumbersString += randomNumber;
    }
    return randomNumbersString;
}

const randomNumbersString = generateRandomNumbersAsString();
console.log(randomNumbersString);
