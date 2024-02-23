const mongoose = require('mongoose');

const ResponseSchema = new mongoose.Schema({
    ClubName: {
        type: String,
    },

    EmailId: {
        type: String,
        unique: true,
    },

    FirstQuestion: {
        type: Number,
    },

    SecondQuesion: {
        type: Number,
    },

    ThirdQuestion: {
        type: Number,
    },

    FourthQuestion: {
        type: Number,
    },

    FifthQuestion: {
        type: Number,
    },

    SixthQuestion: {
        type: Number,
    },

    SeventhQuestion:{
        type:Number,
    },

    EighthQuestion:{
        type:Number,
    },

    NinethQuestion:{
        type:Number,
    },

    TenthQuestion:{
        type:Number,
    },
    
});


module.exports = mongoose.model("UserResponse", ResponseSchema);