"use strict";

const n = parseInt("" + process.argv[2]);

function factorial(n) 
{
    if (n > 0)
        return (n != 1) ? n * factorial(n - 1) : 1;
}

console.log(factorial(n));