"use strict";

const express = require('express');
const path = require("path");
const app = express();

app.use(express.urlencoded({extended: false}));

app.post('/calc',(req,res,next)=>{
    const operator = req.body.operator;
    const num1 = parseFloat(req.body.first);
    const num2 = parseFloat(req.body.second);
    let result =0;
    if(operator=='add') result = num1+num2;
    else if(operator=='sub') result = num1-num2;
    else if(operator == 'mul') result = num1*num2;
    else result = num1/num2;

    res.redirect(303, `/result?result=${result}`);
});

app.get('/simple-calculator', (req, res, next)=>{
    console.log(`In the simple-calculator middleware`);
    res.sendFile(path.join(__dirname, "views", "SimpleCalculator.html"));
});
app.get('/result',(req,res,next)=>{
    const pageContent = `The Answer is: ${req.query.result} </br> <a href="/simple-calculator">Another calculation</a>`;
    res.send(pageContent)
});

app.use((req,res,next)=>{
    console.log(`Responding with a 404 Error page`);
    res.sendFile(path.join(__dirname,"views","404.html"));
});

const PORT = 3000;
app.listen(PORT,()=>{
    console.log(`Server started on port ${PORT}`);
});