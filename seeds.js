const mongoose = require('mongoose');
const Confession = require('./models/confession');

main().catch(err => console.log(err));

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/confessionsApp');
    console.log("MONGO CONNECTED OPEN!!!");
}


const c = new Confession({
    user: "Confy0",
    postHash: "#AC-230808-02112",
    postTitle: "Married school teacher impreginated by a student",
    postConfession: "I am posting on behalf of my older sister who confides in me a lot. She's 24. She is a married school high school teacher and slept with a male student by mistake. Now she got pregnant and the husband was excited but that baby might not be his. She wants to terminate then make another baby ASAP with her husband. How long after a miscarriage can someone try again for a baby?",
    postDate: "2023-08-08",
    category: "love"
});

c.save().then(c => {
    console.log(c);
})
.catch(e => {
    console.log(e)
})