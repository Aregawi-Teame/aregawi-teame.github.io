"use strict";

const express = require("express");
const path = require("path");
const accountRouter = express.Router();
const accountController = require("../controllers/accountController");

accountRouter.get("/list",async (req,res,next)=>{
    console.log("Displying account form and list of accounts");
    const accounts = await accountController.getAccounts(req,res);
    res.locals = {accounts:accounts};
    res.render("account");
});

accountRouter.post("/create",async (req,res,next)=>{
    console.log("Collecting and sendind data to save in the database");
    const result = await accountController.createNewAccount(req,res);
    console.log(result);
    res.redirect(303,"/account/list");
});

module.exports = accountRouter;

