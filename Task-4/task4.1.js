"use strict";

const fs = require("fs");
const express = require("express");

const app = express();
const port = 5015;
app.listen(port);
console.log("My server on port " + port);

app.get("/me/page", function(request, response) 
{
    const nameString = request.query.p;
    if (fs.existsSync(nameString)) 
    {
        const contentString = fs.readFileSync(nameString, "utf8");
        response.end(contentString);
    } 
    else 
    {
        const contentString = fs.readFileSync("bad.html", "utf8");
        response.end(contentString);
    }
});

app.get("/calculate/max", function(request, response) 
{
    var answerJSON = JSON.stringify({result: "badInput"});

    const a = request.query.first;
    const b = request.query.second;
    const c = request.query.third;

    const aInt = parseInt(a);
    const bInt = parseInt(b);
    const cInt = parseInt(c);

    if (aInt == null || bInt == null || cInt == null)
    {
        response.end(answerJSON);
    }
    else
    {   
        const maxElem = Math.max(aInt, bInt, cInt);

        answerJSON = JSON.stringify({result: maxElem});
        response.end(answerJSON);
    }
});