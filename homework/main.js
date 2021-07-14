// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
let array1 = [2, 22, 1, 4, 10];
let array2 = ["html", "CSS", "JS", "Java", "Angular"];
let array3 = ["king", 4, 12, true, false];
console.log(array1);
console.log(array2);
console.log(array3);
// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let arr = [];
arr[0] = 2;
arr[1] = "qwerty";
arr[2] = 3;
arr[3] = false;
console.log(arr);
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
for (let i = 0; i < 10; i++) {
    document.write(`<div>цикл for і document.write</div>`)
}
;
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
for (let i = 0; i < 10; i++) {
    document.write(`<div>цикл for і document.write; index[${i}]</div>`)
}
;
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
let i = 0;
while (i < 20) {
    document.write(`<h1> цикл while і h1 </h1>`);
    i++;
}
;
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
let j = 0;
while (j < 20) {
    document.write(`<h1> цикл while i h1 index [${j}]</h1>`);
    j++;
}
;
// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let array4 = [1, 22, 24, 8, 76, 1.125, 12, 7, 29, 0];
for (let k = 0; k < 10; k++) {
    console.log(array4[k])
}
;
// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let array5 = ["file", "edit", "view", "navigate", "code", "refactor", "run", "tools", "window", "help"];
for (let k = 0; k < 10; k++) {
    console.log(array5[k])
}
;
// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let array6 = [12, 4, "view", true, "code", 7, "run", "tools", "window", false];
for (let k = 0; k < 10; k++) {
    console.log(array6[k])
}
;
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
let array7 = [12, 4, "view", true, "code", 7, "run", "tools", "window", false];
for (let k = 0; k < 10; k++) {
    if (typeof array7[k] === `boolean`) {
        console.log(array7[k])
    }
}
;
// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
let array8 = [12, 4, "view", true, "code", 7, "run", "tools", "window", false];
for (let k = 0; k < 10; k++) {
    if (typeof array8[k] === `number`) {
        console.log(array8[k])
    }
}
;
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
let array9 = [12, 4, "view", true, "code", 7, "run", "tools", "window", false];
for (let k = 0; k < 10; k++) {
    if (typeof array9[k] === `string`) {
        console.log(array9[k])
    }
}
;
// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
let array10 = [];
array10[0] = 8;
array10[1] = "java";
array10[2] = true;
array10[3] = 19;
array10[4] = false;
array10[5] = 48;
array10[6] = 16;
array10[7] = "js";
array10[8] = 0;
array10[9] = 33.44;
for (let array10Element of array10) {
    console.log(array10Element);
}
// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let l = 0; l < 10; l++) {
    console.log(`step :`, l);
    document.write(`step :`, l);
}
;
// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let l = 0; l < 100; l++) {
    console.log(`step :`, l);
    document.write(`step :`, l);
}
;
// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for (let l = 0; l < 100; l += 2) {
    console.log(`step :`, l);
    document.write(`step :`, l);
}
;
// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let l = 0; l < 100; l++) {
    if (l % 2 === 0) {
        console.log(`step :`, l);
        document.write(`step :`, l);
    }
}
;
// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let l = 0; l < 100; l++) {
    if (l % 2 === 1) {
        console.log(`step :`, l);
        document.write(`step :`, l);
    }
}
;
// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
for (let user of usersWithId) {
    for (let city of citiesWithId) {
        if (user.id == city.user_id) {
            console.log(`id :`, user.id);
            console.log(`name :`, user.name);
            console.log(`age :`, user.age);
            console.log(`status :`, user.status);
            console.log(`address :`, `user_id`, city.user_id,`country:`, city.country,`city:`, city.city);
        }
    }
}



