const mongoose = require('mongoose');

const confessionSchema = new mongoose.Schema({
    user:{
        type: String,
        require: true
    },
    postHash:{
        type: String,
        require: true
    },
    postTitle:{
        type: String,
        require: true
    },
    postConfession:{
        type: String,
        require: true
    },
    postUpdates:{
        type: Number,
        default: 0
    },
    postViews:{
        type: Number,
        default: 0
    },
    postLikes:{
        type: Number,
        default: 0
    },
    postComments:{
        type: Number,
        default: 0
    },
    postLikes:{
        type: Number,
        default: 0
    },
    postDate:{
        type: Date,
        require: true
    },
    category:{
        type: String,
        lowercase: true,
        enum:['general','love','life']
    }
});

const Confession = mongoose.model('Confession', confessionSchema);
module.exports = Confession;