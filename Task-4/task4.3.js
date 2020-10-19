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

app.get("/calculate/special", function(request, response) 
{
    var answerJSON = JSON.stringify({result: "badInput"});

    let first = '<!DOCTYPE html><html><head><meta charset="UTF-8"><title>Get array</title></head><body>';
    let third = '</form></body></html>'
    const url = request.query.url;
    const name = request.query.name;

    if (url == null || name == null)
    {
        response.end(answerJSON);
    }
    else
    {   
        let second = '<form method="GET" action=' + '"' + url + '"' +  '>' +  '<p>Введите ' + name + '</p>';
        let sec1 = '<input name=' + name +  ' spellcheck="false" autocomplete="off">';
        let sec2 = '<input type="submit" value="Отправить запрос">';
        const jsonString = first + second + sec1 + sec2 + third;
        const nameString = "html.html";

        fs.writeFileSync(nameString, jsonString);

        answerJSON = JSON.stringify({res: 0});
        response.end(answerJSON);
    }
});

