const express = require("express");
const request = require("request");
  
const app = express();
var port = 3000;
app.listen(port);
console.log(`Server on port ${port}`);

const way = __dirname + "/static";
app.use(express.static(way));
  
app.get("/", function(request, response){
      
    response.sendFile(__dirname + "/static/server-C.html");
});

// функция для отправки POST запроса на другой сервер
function sendPost(url, body, callback) {
    // задаём заголовки
    const headers = {};
    headers["Cache-Control"] = "no-cache, no-store, must-revalidate";
    headers["Connection"] = "close";
    // отправляем запрос
    request.post({
        url: url,
        body: body,
        headers: headers,
    }, function (error, response, body) {
        if(error) {
            callback(null);
        } else {
            callback(body);
        }
    });
}

// принимаем GET запрос и отправляем POST запрос на другой сервер
app.get("/redirect/insert/record", function(request, response) {
    const carName = request.query.carName;
    const carPrice = request.query.carPrice;

    sendPost("http://localhost:5002/insert/record", JSON.stringify({
        carname: carName,
        carprice: carPrice
    }), function(answerString) {
        const answerObject = JSON.parse(answerString);
        const answer = answerObject.answer;
        response.json(answerString);
    });
});

// принимаем GET запрос и отправляем POST запрос на другой сервер
app.get("/redirect/select/record", function(request, response) {
    const carName = request.query.carName;

    sendPost("http://localhost:5002/select/record", JSON.stringify({
        carname: carName
        
    }), function(answerString) {
        const answerObject = JSON.parse(answerString);
        const answer = answerObject.answer;
        response.json(answerString);
    });
});
