"use strict";

const express = require("express");
const connectDB = require("./config/dao");
const path = require("path");
const homeRoutes = require('./routes/api/home');
const accountRoutes = require('./routes/api/account');

const app = express();

// Connect Database
connectDB();
// Define middlewares
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

app.use(express.urlencoded({extended: false}));

app.use("", homeRoutes);
app.use("/account", accountRoutes);
app.use("/views", express.static(path.join(__dirname, "views")));


app.use((req, res, next)=>{
    console.log("Responding from 404 page not found");
    res.status(404).redirect(303, "/views/404.html");
})
const PORT_NUMBER = 3030;
app.listen(PORT_NUMBER,()=>{
    console.log(`Server started on port ${PORT_NUMBER}`);
});