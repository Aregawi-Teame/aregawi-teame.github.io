"use strict";

const express = require("express");
const homeRouter = express.Router();
const path = require("path");

// Define home page routes 
homeRouter.get("/", (req, res, next)=>{
    console.log("Presenting home page");
    res.sendFile(path.join(__dirname, "../../views","index.html"));
});

module.exports = homeRouter;