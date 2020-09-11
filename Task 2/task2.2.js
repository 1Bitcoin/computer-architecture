"use strict";

class Triangle
{
    constructor(lengthA, lengthB, lengthC) 
    {
        this.lengthA = lengthA;
        this.lengthB = lengthB;
        this.lengthC = lengthC;
    }

    CheckTriangle()
    {
        let eps = 1e-9;

        if (this.lengthA + this.lengthB > this.lengthC + eps && this.lengthA + this.lengthC > this.lengthB + eps && 
            this.lengthB + this.lengthC > this.lengthA + eps)
        {
            console.log("It's triangle exist");
        }
        else
        {
            console.log("it's triangle doesn't exist");

        }
    }

    GetPerimetr()
    {
        return this.lengthA + this.lengthB + this.lengthC;
    }

    GetSquare()
    {
        let p = (this.lengthA + this.lengthB + this.lengthC) / 2;
        return Math.sqrt(p * (p - this.lengthA) * (p - this.lengthB) * (p - this.lengthC));
    }

    CheckSquareness()
    {
        let eps = 1e-9;

        let cosA = (this.lengthA * this.lengthA + this.lengthC * this.lengthC - this.lengthB * this.lengthB) /
        2 * this.lengthA * this.lengthC;

        let cosB = (this.lengthA * this.lengthA + this.lengthB * this.lengthB - this.lengthC * this.lengthC) /
        2 * this.lengthA * this.lengthB;

        let cosC = (this.lengthB * this.lengthB + this.lengthC * this.lengthC - this.lengthA * this.lengthA) /
        2 * this.lengthB * this.lengthC;

        if (Math.abs(cosA) < eps || Math.abs(cosB) < eps || Math.abs(cosC) < eps)
        {
            console.log("Rectangular triangle");
        }
        else
        {
            console.log("Not rectangular triangle");
        }
    }
}

let myTriangle = new Triangle(2, 4, 5);
let myTriangle1 = new Triangle(20, 4, 5);
let myTriangle2 = new Triangle(3, 4, 5);

myTriangle.CheckTriangle();
myTriangle1.CheckTriangle();

console.log(myTriangle.GetPerimetr());
console.log(myTriangle1.GetPerimetr());

console.log(myTriangle.GetSquare());
console.log(myTriangle1.GetSquare());

myTriangle.CheckSquareness();
myTriangle1.CheckSquareness();
myTriangle2.CheckSquareness();
