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

app.get("/find/object", function(request, response)
{
    const id = parseInt(request.query.id);

    if (id == null || id < 0)
    {
        response.end(JSON.stringify({result: "badInput"}));
    }
    else
    {
        var contentString = fs.readFileSync("JSON_for_task4.2.txt", "utf8");
        var objects = [];
        objects = JSON.parse(contentString);
        console.log(objects.length);
        
        if (id + 1 > objects.length)
        {
            response.end(JSON.stringify({result: "indexOutofRange"}));
        }
        else
        {
            response.end(JSON.stringify(objects[id]));
        }
    }
});
