"use strict";

const express = require("express");
const path = require("path");
// const accountApiRoutes = require("./routes/api/account");
const homeRoutes = require("./routes/home");
const accountRoute = require("./routes/account");

const app = express();

// Define Middlewares;

// Setup view template engin
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// Setup HttpRequest data parser midlleware
app.use(express.urlencoded({extended:false}));

// Setup static webpages
app.use("/static", express.static(path.join(__dirname,"views")));

// Setup routes for homepage and other static pages

app.use("", homeRoutes);

// Setup routes for account and related pages
app.use("/account", accountRoute);


app.use((req, res, next)=>{
    console.log("Responding from 404 page not found page");
    res.status(404).redirect(303, "/static/404.html");
});

const PORT_NUMBER = 8081;
app.listen(PORT_NUMBER,()=>{
    console.log(`Server started on port ${PORT_NUMBER}`);
});
console.log("Please wait...");