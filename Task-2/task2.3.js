"use strict";

let seconds = 0;

function FirstStep()
{
    let interval = setInterval(() => {
        seconds++;
        let message = "Seconds: " + seconds;
        console.log(message);
        if (seconds === 10) 
        {
            clearInterval(interval); 
            SecondStep();
        }
    }, 2000);
}

function SecondStep()
{
    let newinterval = setInterval(() => {
        seconds++;
        let message = "Seconds: " + seconds;
        console.log(message);
        if (seconds === 20) 
        {
            clearInterval(newinterval); 
            seconds = 0;
            FirstStep();
        }
    }, 1000);
}

FirstStep();