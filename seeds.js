const mongoose = require('mongoose');
const Confession = require('./models/confession');

main().catch(err => console.log(err));

async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/confessionsApp');
    console.log("MONGO CONNECTED OPEN!!!");
}


/*const c = new Confession({
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

*/

const seedConfessions = [
    {
        user: "Confy0",
        postHash: "#AC-230808-02113",
        postTitle: "My child is not fluent in home language",
        postConfession: "What can I do about my child? She's not fluent in isiXhosa. We have to address her in English. and everytime I suggest to my baby mama that she spend more than  just some weekends and holidays in the township or rural areas she refuses. I have two other children who are Xhosa speaking",
        postDate: "2023-08-08",
        category: "life",
        postViews: 784,
        postLikes: 333,
        postComments: 31,
        postUpdates: 1
    },
    {
        user: "Confy1",
        postHash: "#AC-230808-12115",
        postTitle: "NSFAS fund student",
        postConfession: "I want to ask something please help. How many years does NSFAS fund a student because it's my 3rd year at university and I'll finish my degree on my 5th year due to not registering all my modules per year.",
        postDate: "2023-08-08",
        category: "general",
        postViews: 624,
        postLikes: 253,
        postComments: 20
    },
    {
        user: "Confy2",
        postHash: "#AC-230809-02137",
        postTitle: "My daughter looks like my girlfriend's EX",
        postConfession: "My girlfriend and I  have a daughter now she's 3 years old.. the child looks like one of her exes, I can tell by the noses and head  when I saw the guy. now I want to do DNA test to be sure of if I am investing or it's a hands ball still early coz ziyakhala kwa mjolo. the other thing I can go a day without thinking of the child until someone say her name .. never dreamed about the child too. Idk if its normal or what. looking for place where I can go DNA me and the suspect only. or maybe the procedure how it's done with her know?",
        postDate: "2023-08-09",
        category: "love",
        postViews: 981,
        postLikes: 456,
        postComments: 59,
        postUpdates: 3
    },
    {
        user: "Confy3",
        postHash: "#AC-230809-22118",
        postTitle: "3 months pregnant girlfriend complains during sex",
        postConfession: "It's a 24 years old gent here and i need to vent so here is my story, everytime i have sex with my girl she reach orgasm and discharge💦either in a first round or second, we enjoy one another so much but the problem now is that she's about 3months preg and she's always complaining that she doesn't wanna have sex like before cuz she's afraid she might reach orgasm and discharge  the baby. Even when we're busy doing it when she's about to reach orgasm she'd  push me back n stop me from digging her. We no longer have sex like before, sometimes I'd hit 1 round then she discharge 💦 and sleep like she's was baking bricks and I'd want more cuz the cookie is more tight and hot like a hotplate🔥.Guys how do i convince her that she won't discharge the baby and is it possible for a pregnant  woman to miscarry because of reaching orgasm during sex??I'll read comments😁😁",
        postDate: "2023-08-09",
        category: "love",
        postViews: 752,
        postLikes: 125,
        postComments: 20
    },
]

Confession.insertMany(seedConfessions)
    .then(c => {
        console.log(c);
    })
    .catch(e => {
        console.log(e)
    });