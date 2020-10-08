"use strict";

const fs = require("fs");
const readlineSync = require('readline-sync');

let folder = readlineSync.question("Input folder: ");
//const folder = "C:/Users/zhigalkin/OneDrive/Desktop/t";

let extensions = readlineSync.question("Input extensions: ");

const arr = fs.readdirSync(folder);

function getExtension(filename) 
{
    var i = filename.lastIndexOf('.');
    return (i < 0) ? '' : filename.substr(i + 1);
}

for (let i = 0; i < arr.length; i++)
 {
    const fileName = arr[i];
    if (extensions.indexOf(getExtension(fileName)) != -1)
    {
        const directory = folder + "/" + fileName
        let fileContent = fs.readFileSync(directory, "utf8");
        console.log(fileContent);
    }
}
