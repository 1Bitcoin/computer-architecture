"use strict";

// импорт библиотеки
const express = require("express");

// запускаем сервер
const app = express();
const port = 5000;
app.listen(port);
console.log(`Server on port ${port}`);

// активируем шаблонизатор
app.set("view engine", "hbs");

// заголовки в ответ клиенту
app.use(function(req, res, next) {
    res.header("Cache-Control", "no-cache, no-store, must-revalidate");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Origin", "*");
    next();
});

const infoObject = {
    descriptionValue: "Games list (taking into account age)",
    gamesArray: [
        {name: "GTA", description: "cool", age: 15},
        {name: "kenshi", description: "very good strategy", age: 6},
        {name: "happy farm", description: "so-so", age: 1},
        {name: "TLoUS 2", description: "cool", age: 20}
    ]
};

// выдача страницы с массивом учеников
app.get("/games", function(request, response) {
    let currentAge = parseInt(request.query.age);
    let resultObject = { descriptionValue: infoObject.descriptionValue, gamesArray: [] };
    resultObject.gamesArray = infoObject.gamesArray.filter(item => item.age < currentAge);

    response.render("pageGames.hbs", resultObject);
});