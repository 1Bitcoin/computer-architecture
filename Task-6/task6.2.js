"use strict";

// импортируем библиотеки
const express = require("express");
const cookieSession = require("cookie-session");

// запускаем сервер
const app = express();
const port = 5000;
app.listen(port);
console.log(`Server on port ${port}`);

// работа с сессией
app.use(cookieSession({
    name: 'session',
    keys: ['hhh', 'qqq', 'vvv'],
    maxAge: 24 * 60 * 60 * 1000 * 365
}));

const users = [
    {login: "mqa", password: "AJHjghbj", hobby: "a1", age: 5},
    {login: "qqqq", password: "Znjb5", hobby: "a2", age: 16},
    {login: "w", password: "123456", hobby: "a3", age: 15},
    {login: "v", password: "zxcvb", hobby: "a4", age: 50},
    {login: "s", password: "asdfgh", hobby: "a5", age: 19},
    {login: "gg", password: "q12w3e", hobby: "a6", age: 24},
];

// сохранить cookie
app.get("/auth/user", function(request, response) {
    // получаем параметры запроса
    const login = request.query.login;
    const password = request.query.password;

    // контролируем существование параметров
    if (!login) 
        return response.end("Login not set");

    if (!password) 
        return response.end("password not set");

    const user = users.find(s => s.login === login && s.password === password);

    if (!user) 
    {
        response.statusCode = 400;
        return response.end("inccorect login or password");
    }
    else 
    {
        // выставляем cookie
        request.session.login = login;
        request.session.password = password;
        return response.end("ok auth");
    }
});

app.get("/user", function(request, response) {
    if (!request.session.login || !request.session.password) 
    {
        response.statusCode = 401;
        return response.end("not auth");
    }

    // отправляем ответ с содержимым cookie
    const login = request.session.login;
    const password = request.session.password;

    const user = users.find(s => s.login === login && s.password == password);
    if (!user) 
    {
        response.statusCode = 401;
        return response.end("not auth");
    }

    return response.end(JSON.stringify(user));
});

// удалить все cookie
app.get("/delete", function(request, response) {
    request.session = null;
    response.end("Delete cookie ok");
});