const fs = require('fs');
const readlineSync = require('readline-sync');

let n = readlineSync.question("Input n: ");

if (n <= 0)
    return;
    
const arrayNamefiles = [];

const folder = "C:/Users/zhigalkin/OneDrive/Desktop/t";
const arr = fs.readdirSync(folder);

function InputFileName(arrayNamefiles)
{
    for (let j = 0; j < n; j++)
    {
        let nameFile = readlineSync.question("Input name file: ");
        arrayNamefiles.push(nameFile);
    }
    console.log(arrayNamefiles);
}

function JoinContent(arrayAllfiles, arrayNamefiles)
{
    var string = "";

    for (let j = 0; j < arrayAllfiles.length; j++)
    {
        var fileName = arrayAllfiles[j];
        if (arrayNamefiles.indexOf(fileName) != -1)
        {
            const directory = folder + "/" + fileName
            let fileContent = fs.readFileSync(directory, "utf8");
            string += fileContent;
        }
    }
    console.log(string);
    return string;
}

function WriteToFile(string)
{
    const nameString = "test1.txt";
    fs.writeFileSync(nameString, string);

    console.log("Create File OK");
}

InputFileName(arrayNamefiles);
var string = JoinContent(arr, arrayNamefiles);
WriteToFile(string);