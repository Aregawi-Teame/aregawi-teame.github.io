"use strict";
const mongoose =  require('mongoose');
const config = require("config");
const db = config.get('mongoURI');

const connectDB = async () =>{
    try{
        await mongoose.connect(db);
        console.log('MongoDB Connected...');
    }
    catch(err){
        console.log(err.message);
        // Exit process with failure 
        process.exit(1);
    }
};

module.exports = connectDB;

// const Account = require("../model/account/Account")
// const accounts = (function(){
//     const getAccounts=function(){
//         const listOfAccoutns = [];
//         listOfAccoutns.push(new Account("01-123-2135","Aregawi T. Arefe","Checking"));
//         listOfAccoutns.push(new Account("01-100-1234","Yemane Y. Weleslase","Saving"));
//         listOfAccoutns.push(new Account("01-101-2541","Heran A. Beyene","Checking"));

//         return listOfAccoutns;
//     }
//     return{
//         getAccounts:getAccounts
//     }
// })();

// module.exports = accounts;