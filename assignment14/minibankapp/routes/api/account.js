"use strict";

const express = require("express");
const path = require("path");
const accountRouter = express.Router();
const db = require("../../config/dao");
const Account = require('../../model/Account');
// Define routes for account pages

accountRouter.get("/list-form", async (req, res, next)=>{
    console.log(`Registering and Presenting list of Accounts`);
    //const accounts = db.getAccounts();
    const accounts = await Account.find();
    console.log(accounts);
    res.locals = {accounts: accounts};
    res.render("account");
    // res.sendFile(path.join(__dirname, "../../views","account.html"));
});

accountRouter.post('/create', async (req, res, next)=>{
    // const {accountNo, customerName, accountType} = req.body;
    const accountNo = req.body.accountNo;
    const customerName = req.body.customerName;
    const accountType = req.body.accountType;
    let account = new Account({
        accountNo,
        customerName,
        accountType
    });
    await account.save();
    console.log("Account Created Successfuly");
    res.redirect(303,'/account/list-form')
});

module.exports = accountRouter;