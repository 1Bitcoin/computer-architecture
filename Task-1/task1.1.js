"use strict";

class Child
{
    constructor(secondName, age) 
    {
        this.secondName = secondName;
        this.age = age;
    }
}

class ChildStorage 
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

    Create(child)
    {
        let id = this.GetIdBySecondName(child.secondName);

        if (id == -1)
        {
            this.storage.push(child);
        }
    }

    GetIdBySecondName(secondName)
    {
        let id = -1;

        for (let i = 0; i < this.storage.length; i++)
        {
            if (this.storage[i].secondName == secondName)
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

    Update(id, child)
    {
        let idCheck = this.GetIdBySecondName(child.secondName);

        if (idCheck == -1 || id == idCheck)
        {
            this.storage[id].secondName = child.secondName;
            this.storage[id].age = child.age;
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

    GetAverageAge()
    {
        let sum = 0;
        for (let i = 0; i < this.storage.length; i++)
        {
            sum += this.storage[i].age;
        }

        return sum / this.storage.length;
    }

    GetInfoByMaxAge()
    {
        if (this.storage.length == 0)
            return null;
        
        let maxAgechild = this.storage[0];

        for (let i = 0; i < this.storage.length; i++)
        {
            if (this.storage[i].age > maxAgechild.age)
            {
                maxAgechild = this.storage[i];
            }
                
        }
        return maxAgechild
    }

    GetChildrenByAge(minAge, maxAge)
    {
        return this.storage.filter(child => minAge <= child.age && child.age <= maxAge);
    }

    GetChildrenBySecondName(string)
    {
        return this.storage.filter(s => s.secondName.indexOf(string) != -1);
    }

    GetChildrenByLenSecondName(number)
    {
        return this.storage.filter(s => number < s.secondName.length);
    }

    GetChildrenByVowelSecondName()
    {
        return this.storage.filter(s => s.secondName.search(/^[euioayEYUIOA]/i) != -1);
    }
}

let myStorage = new ChildStorage([]);

myStorage.Create(new Child("Afimin", 12));
myStorage.Create(new Child("gf", 1));
myStorage.Create(new Child("A", 2));
myStorage.Create(new Child("Afim", 30));

console.log("show all");
myStorage.ShowAll();
console.log("update id = 2");

myStorage.Update(2, new Child("Afiming", 22));
console.log("show all");
myStorage.ShowAll();
console.log("read[2] = ", myStorage.Read(2));
console.log("delete[2] = ", myStorage.Delete(2));
console.log("show all");
myStorage.ShowAll();

console.log("Read[0]=", myStorage.Read(0));
console.log();

console.log("GetInfoByMaxAge ", myStorage.GetInfoByMaxAge());
console.log("GetChildrenByAge ", myStorage.GetChildrenByAge(1, 2));

console.log("GetChildrenBySecondName ", myStorage.GetChildrenBySecondName("gf"));


console.log("GetChildrenByLenSecondName ", myStorage.GetChildrenByLenSecondName(2));

console.log("GetChildrenByVowelSecondName ", myStorage.GetChildrenByVowelSecondName());

