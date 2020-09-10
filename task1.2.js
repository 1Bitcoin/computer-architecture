"use strict";

//let storage = [];

class Student
{
    constructor(groupName, numberTicket, programmingRate) 
    {
        this.groupName = groupName;
        this.numberTicket = numberTicket;
        this.programmingRate = programmingRate;
    }
}

class StudentStorage 
{
    constructor(storage) 
    {
        this.storage = storage;
    }

    GetLen() 
    {
        let s = storage.length;
        return s;
    }

    Create(student)
    {
        let id = this.GetIdByTicket(student.numberTicket);

        if (id == -1)
        {
            this.storage.push(student);
        }
    }

    GetIdByTicket(numberTicket)
    {
        let id = -1;

        for (let i = 0; i < this.storage.length; i++)
        {
            if (this.storage[i].numberTicket == numberTicket)
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
        let idCheck = this.GetIdByTicket(student.numberTicket);

        if (idCheck == -1 || id == idCheck)
        {
            this.storage[id].groupName = student.groupName;
            this.storage[id].numberTicket = student.numberTicket;
            this.storage[id].programmingRate = student.programmingRate;
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

    GetAverageRateStudent(id)
    {
        let sum = 0;
        for (let i = 0; i < this.storage[id].programmingRate.length; i++)
        {
            sum += this.storage[id].programmingRate[i];
        }

        return sum / this.storage[id].programmingRate.length;
    }

    GetInfoByGroup(groupName)
    {
        for (let i = 0; i < this.storage.length; i++)
        {
            if (this.storage[i].groupName == groupName)
            {
                console.log(this.storage[i]);
            }      
        }
    }

    GetStudentMaxNumberRate(groupName)
    {
        let answer = null;
        let maxRatenumber = 0;

        for (let i = 0; i < this.storage.length; i++)
        {
            if (this.storage[i].groupName == groupName && this.storage[i].programmingRate.length > maxRatenumber)
            {
                maxRatenumber = this.storage[i].programmingRate.length;
                answer = this.storage[i];
            }      
        }

        return answer;
    }

    GetStudentZeroRate()
    {
        return this.storage.filter(s => s.programmingRate.length == 0);
    }

}

let myStorage = new StudentStorage([]);

myStorage.Create(new Student("IU7-55", 228, [5, 5, 5]));
myStorage.Create(new Student("IU7-54", 123, [5, 4, 5, 5]));
myStorage.Create(new Student("IU7-54", 113, [2, 2, 5]));
myStorage.Create(new Student("IU7-53", 24, [4, 4, 5, 5, 5, 5]));
myStorage.Create(new Student("IU7-52", 2, [3, 4, 5]));
myStorage.Create(new Student("IU7-51", 23, []));

myStorage.ShowAll();

console.log(myStorage.GetAverageRateStudent(2));

console.log();

myStorage.GetInfoByGroup("IU7-54");

console.log();

console.log(myStorage.GetStudentMaxNumberRate("IU7-54"));

console.log();

console.log(myStorage.GetStudentZeroRate());

console.log();
