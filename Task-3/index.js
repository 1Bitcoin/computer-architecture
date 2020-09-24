"use strict";

const readlineSync = require('readline-sync');
const fs = require("fs");

const arr = [];

let n = readlineSync.question("Input n: ");

for (let j = 0; j < n; j++)
{
    let value = readlineSync.question("Input string: ");

    if (value.length % 2 == 0)
    {
        arr.push(value);
    }
}

const jsonString = JSON.stringify(arr);
const nameString = "test.txt";

fs.writeFileSync(nameString, jsonString);

console.log("Create File OK");
console.log(jsonString);