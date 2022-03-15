const mongoose = require('mongoose');
const AccountSchema = new mongoose.Schema({
    accountNo:{
        type: String,
        required: true,
        unique: true
    },
    customerName:{
        type: String,
        required: true
    },
    accountType:{
        type:String,
        required:true
    },
    date:{
        type: Date,
        default: Date.now
    }
});

module.exports = Account = mongoose.model('account', AccountSchema);