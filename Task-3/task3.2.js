"use strict";

const fs = require("fs");

const nameString = "test.txt";

const contentString = fs.readFileSync(nameString, "utf8");

const obj = JSON.parse(contentString);
console.log(obj.filter(s => s.search(/[aeiou]+$/i) != -1));