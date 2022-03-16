"use strict";

const express = require("express");
const path = require("path");
const homeRouter = express.Router();

homeRouter.get("/",(req,res, next)=>{
    console.log("Serving from home page");
    res.redirect(303, "/static/index.html");
});

homeRouter.get("/home",(req,res,next)=>{
    console.log("Serving from home page");
    res.status(303).sendFile(path.join(__dirname,"../views","index.html"));
});

module.exports = homeRouter;