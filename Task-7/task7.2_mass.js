"use strict";

// импортируем библиотеку
const execSync = require('child_process').execSync;

// функция для вызова программы и получения результата её работы
function useCmd(cmd) 
{
	const answer = execSync(cmd, { encoding: 'utf8' });
	return answer.toString();
}

// получаем параметры скрипта
const n = process.argv.length - 2;
let mass = [];
for (let i = 0; i < n; i++) 
{
    mass.push(parseFloat(process.argv[2 + i]));
}
console.log("mass = ", mass);

for (const elem of mass) 
{
    const res = useCmd(`node task7.2.js ${elem}`)
    console.log(elem, res)
}