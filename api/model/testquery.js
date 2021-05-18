const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let user = new Schema({
    FirstName: {
        type: String
    },
    LastName: {
        type: String
    },
    Email: {
        type: String
    },
    BookingDate: {
        type: String
    },
    BookingTime:{
        type:String
    },
    Persons:{
        type:Number
    },
    Phone:{
        type:Number
    },
    SpecialRequest:{
        type:String
    }
},
);
module.exports = mongoose.model('User', user); 