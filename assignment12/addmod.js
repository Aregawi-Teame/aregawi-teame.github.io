"use strict";

exports.add = function(req,res,vals){
    const sum = parseFloat(vals.first) + parseFloat(vals.second);
    res.writeHead(200, {
        'Content-Type': 'text/html'
    });
    res.write(`<!DOCTYPE html>
    <html>
        <head>
            <title>Calculator Web Site</title>
        </head>
        <body>
            <p>The sum is: ${String(sum)}</p>
        </body>
    </html>`);
    res.end();
};