"use strict";

class Point
{
    constructor(name, positionX, positionY) 
    {
        this.name = name;
        this.positionX = positionX;
        this.positionY = positionY;
    }
}

class PointStorage 
{
    constructor(storage) 
    {
        this.storage = storage;
    }

    Create(point)
    {
        let id = this.GetIdByName(point.name);

        if (id == -1)
        {
            this.storage.push(point);
        }
    }

    GetIdByName(name)
    {
        let id = -1;

        for (let i = 0; i < this.storage.length; i++)
        {
            if (this.storage[i].name == name)
            {
                id = i;
            }
        }

        return id;
    }

    ShowAll()
    {
        for (let i = 0; i < this.storage.length; i++)
        {
            console.log(this.storage[i]);
        }           
    }

    Read(id)
    {
        if (id < this.storage.length)
        {
            return this.storage[id];
        }      
    }

    Update(id, student)
    {
        let idCheck = this.GetIdByName(point.name);

        if (idCheck == -1 || id == idCheck)
        {
            this.storage[id].name = point.name;
            this.storage[id].positionX = point.positionX;
            this.storage[id].positionY = point.positionY;
        }
    }

    Delete(id)
    {
        let answer = null;

        if (id < this.storage.length && id >= 0)
        {
            this.storage.splice(id, 1); // Начиная с позиции id удаляем 1 элемент
            answer = 1;
        }

        return answer;
    }

    GetPointsWithMaxDistance()
    {
        let answer = [];

        if (this.storage.length <= 1)
            return answer;

        let maxDistance = 0;

        for (let i = 0; i < this.storage.length - 1; i++)
        {
            let distance = this.GetDistance(this.storage[i], this.storage[i + 1]);

            if (distance > maxDistance)
            {
                answer = [];
                maxDistance = distance;
                answer.push(this.storage[i]);
                answer.push(this.storage[i + 1]);
            }
        }

        return answer;
    }

    GetDistance(firstPoint, secondPoint)
    {
        return Math.sqrt(Math.pow((secondPoint.positionX - firstPoint.positionX), 2) + 
                        Math.pow((secondPoint.positionY - firstPoint.positionY), 2));
    }

    GetPointCertainDistance(maxDistance, point)
    {
        let answer = [];

        for (let i = 0; i < this.storage.length; i++)
        {
            let distance = this.GetDistance(this.storage[i], point);

            if (distance <= maxDistance)
            {
                answer.push(this.storage[i]);
            }      
        }

        return answer;
    }

    GetPointsAlongAxis(nameAxis, direction)
    {
        let answer = [];

        if (nameAxis == "X")
        {           
            for (let i = 0; i < this.storage.length; i++)
            {
                if (this.CheckOnX(this.storage[i]))
                {
                    if (direction == "UP")
                    {
                        answer.push(this.storage[i]);
                    }                     
                }
                else
                {
                    if (direction == "DOWN")
                    {
                        answer.push(this.storage[i]);
                    }
                }
            }
        }

        if (nameAxis == "Y")
        {
            for (let i = 0; i < this.storage.length; i++)
            {
                if (this.CheckOnY(this.storage[i]))
                {
                    if (direction == "RIGHT")
                    {
                        answer.push(this.storage[i]);
                    }                     
                }
                else
                {
                    if (direction == "LEFT")
                    {
                        answer.push(this.storage[i]);
                    }
                }
            }
        }

        return answer;
    }

    CheckOnX(point)
    {
        return point.positionY < 0 ? 0 : 1;;
    }

    CheckOnY(point)
    {
        return point.positionX < 0 ? 0 : 1;
    }

    // A(x,y) и C(x1,y1) Точка А является верхней левой вершиной, а C - нижней правой.
    GetPointsInZone(firstZonepoint, secondZonepoint)
    {
        let answer = [];
        for (let i = 0; i < this.storage.length; i++)
        {
            if (this.CheckZonePoint(this.storage[i], firstZonepoint, secondZonepoint))
            { 
                answer.push(this.storage[i]);
            }                   
        }
        return answer;
    }

    CheckZonePoint(point, firstZonepoint, secondZonepoint)
    {
        let answer = 0;

        if (point.positionX >= firstZonepoint.positionX && point.positionX <= secondZonepoint.positionX)
        {
            if (point.positionY <= firstZonepoint.positionY && point.positionY >= secondZonepoint.positionY)
            {
                answer = 1;
            }
        }

        return answer;
    }
}

let myStorage = new PointStorage([]);

myStorage.Create(new Point("my", 2, -3));
myStorage.Create(new Point("good", -5, 23));
myStorage.Create(new Point("sad", -10, -23));
myStorage.Create(new Point("bad", -1, 0));
myStorage.Create(new Point("happy", 1, 1));
myStorage.Create(new Point("invisible", 20, 20));


myStorage.ShowAll();

console.log(myStorage.GetPointsWithMaxDistance());

console.log();

console.log(myStorage.GetPointCertainDistance(100, new Point("test", 0, 0)));
console.log(myStorage.GetPointCertainDistance(2, new Point("test", 0, 0)));

console.log();

console.log(myStorage.GetPointsAlongAxis("X", "UP"));
console.log();

console.log(myStorage.GetPointsAlongAxis("X", "DOWN"));
console.log();

console.log(myStorage.GetPointsAlongAxis("Y", "RIGHT"));
console.log();

console.log(myStorage.GetPointsAlongAxis("Y", "LEFT"));

console.log();

console.log(myStorage.GetPointsInZone(new Point("test1", 0, 3), new Point("test2", 2, 0)));

console.log();
