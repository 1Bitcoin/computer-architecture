const express = require("express");
const fs = require("fs");
  
const app = express();
var port = 3000;
app.listen(port);
console.log(`Server on port ${port}`);

// создаем парсер для данных в формате json
const jsonParser = express.json();
  
app.post("/save/information", jsonParser, function (request, response) {

    if (request.body.email == "" || request.body.subname == "" || request.body.phone == "")
    {
        response.json(JSON.stringify({result: "Don't save (bad input)"}));
    }
    else
    {
        checkRepetitions(request, response);
    }
});

function checkRepetitions(request, response)
{
    let fileContent = fs.readFileSync("file.txt", "utf8");
    if (fileContent.indexOf(request.body.email) == -1 && fileContent.indexOf(request.body.phone) == -1)
    {
        fs.appendFileSync("file.txt", "\n" + JSON.stringify(request.body));
        response.json(JSON.stringify({result: "Save content ok"}));
    }
    else
    {
        response.json(JSON.stringify({result: "Don't save content (repetitions)"}));       
    }   
}

const way = __dirname + "/static";
app.use(express.static(way));
  
app.get("/", function(request, response){
      
    response.sendFile(__dirname + "/static/task5.1.html");
});
  