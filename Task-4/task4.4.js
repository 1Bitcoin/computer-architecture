"use strict";

const fs = require("fs");
const express = require("express");

const app = express();
const port = 5015;
app.listen(port);
console.log("My server on port " + port);

app.get("/page", function(request, response) 
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

app.get("/calculate/special", function(request, response) 
{
    var answerJSON = JSON.stringify({result: "badInput"});

    const url = request.query.first;
    const b = request.query.second;

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

        answerJSON = JSON.stringify(getAnswer(aInt, bInt, cInt));
        response.end(answerJSON);
    }
});

function getAnswer(a, b, c)
{
    var answer = [];

    for (var i = a; i <= b; i++)
    {
        if (i % c == 0)
            answer.push(i);
    }

    return answer;
}