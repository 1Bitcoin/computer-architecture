"use strict";

class Point
{
    constructor(name, positionX, positionY) 
    {
        this.name = name;
        this.positionX = positionX;
        this.positionY = positionY;
    }

    ShowInfo()
    {
        console.log("Name: " + this.name + "\nPosition x: " + this.positionX + "\nPosition y: " + this.positionY);
    }
}

class Section
{
    constructor(firstPoint, secondPoint)
    {
        this.firstPoint = firstPoint;
        this.secondPoint = secondPoint;
    }

    ShowInfo()
    {
        console.log("Info about section\n")
        console.log("First Point:" + "\nPosition x: " + this.firstPoint.positionX + "\nPosition y: " + this.firstPoint.positionY);
        console.log("\nSecond Point:" + "\nPosition x: " + this.secondPoint.positionX + "\nPosition y: " + this.secondPoint.positionY);
    }

    GetLength()
    {
        return Math.sqrt(Math.pow((this.secondPoint.positionX - this.firstPoint.positionX), 2) + 
                        Math.pow((this.secondPoint.positionY - this.firstPoint.positionY), 2));
    }
}

let myPoint = new Point("my", 1, 2);
let myNewpoint = new Point("good", 4, 56);

myPoint.ShowInfo();

console.log();

let section = new Section(myPoint, myNewpoint);

section.ShowInfo();

console.log("\nLength section is " + section.GetLength());