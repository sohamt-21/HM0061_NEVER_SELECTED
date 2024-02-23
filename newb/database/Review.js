const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
    ClubName: {
        type: String,
    },

    EmailId: {
        type: String,
        unique:true,
    },

    Rating:{
        type:mongoose.Schema.Types.Decimal128,
    }

});


module.exports = mongoose.model("Review", ReviewSchema);