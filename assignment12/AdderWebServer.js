"use strict";

const http = require('http');
const url = require('url');
const fs = require('fs');

const addmod = require('./addmod');

console.log("Server starting...");
http.createServer((req,res)=>{
    const quiryString = url.parse(req.url, true);
    const fileName = `.${quiryString.pathname}`;
    if(quiryString.pathname=="/add.js")
        addmod.add(req, res, quiryString.query);
    else{
        fs.readFile(fileName,(err, content)=>{
            if(err){
                res.writeHead(404, {
                    'Content-Type' : 'text/html'
                });
                res.write("404 Not Found");
                res.end();
            }
            res.writeHead(200);
            res.write(content);
            res.end();
        });
    }
}).listen(8080);
