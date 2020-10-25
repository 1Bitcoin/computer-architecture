"use strict";

// импорт библиотеки
const express = require("express");
const fs = require("fs");

// запускаем сервер
const app = express();
const port = 5002;
app.listen(port);
console.log("Server on port " + port);

// заголовки для ответа
app.use(function(req, res, next) {
    res.header("Cache-Control", "no-cache, no-store, must-revalidate");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

// загрузка тела
function loadBody(request, callback) {
    let body = [];
    request.on('data', (chunk) => {
        body.push(chunk);
    }).on('end', () => {
        body = Buffer.concat(body).toString();
        callback(body);
    });
}

// приём запроса
app.post("/insert/record", function(request, response) {
    loadBody(request, function(body) {
        const obj = JSON.parse(body);
        const carName = obj.carname;
        const carPrice = obj.carprice;

        let carJson = JSON.stringify({
            carname: carName, carprice: carPrice
        });

        fs.appendFileSync("carInfo.txt", "\n" + carJson);

        response.json(JSON.stringify({
            answer: "Car added ok"
        }));
    });
});

// приём запроса
app.post("/select/record", function(request, response) {
    loadBody(request, function(body) {
        const obj = JSON.parse(body);
        const carName = obj.carname;

        let fileContent = fs.readFileSync("carInfo.txt", "utf8");

        let beginIndex = fileContent.indexOf(carName);
        let i = beginIndex;
        
        while (fileContent[i] != "}")
        {
            i++;
        }

        let j = beginIndex;
        
        while (fileContent[j] != "{")
        {
            j--;
        }

        let startIndex = j;
        let endIndex = i;

        let result = fileContent.slice(startIndex, endIndex + 1);

        const answerObject = JSON.parse(result);
        const carprice = answerObject.carprice;

        response.json(JSON.stringify({
            answer: carprice
        }));
    });
});