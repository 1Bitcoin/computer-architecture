const express = require("express");
const fs = require("fs");
  
const app = express();
var port = 3000;
app.listen(port);
console.log(`Server on port ${port}`);

// создаем парсер для данных в формате json
const jsonParser = express.json();
  
app.get("/check/information", jsonParser, function (request, response) {

    if (request.body.email == "")
    {
        response.json(JSON.stringify({result: "Don't check (bad input)"}));
    }
    else
    {
        checkInformation(request, response);
    }
});

function checkInformation(request, response)
{
    let fileContent = fs.readFileSync("file.txt", "utf8");
    let indexStartcontent = fileContent.indexOf('"email":' + '"' + request.query.email + '"');

    if (indexStartcontent != -1)
    {
        let indexEndcontent = fileContent.indexOf("\n", indexStartcontent);
        response.json(JSON.stringify(fileContent.slice(indexStartcontent - 1, indexEndcontent)));
    }
    else
    {
        response.json(JSON.stringify({result: "Information not found"}));       
    }   
}

const way = __dirname + "/static";
app.use(express.static(way));

app.get("/", function(request, response){
      
    response.sendFile(__dirname + "/static/task5.2.html");

});