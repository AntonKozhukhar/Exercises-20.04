"use strict";

/* 1. Дана JSON строка '["Коля", "Вася", "Петя"]'. Преобразуйте ее в массив JavaScript и выведите на экран элемент "Петя".

Для теста:
const json = '["Коля", "Вася", "Петя"]'
const json = '["Коля", "Вася, "Петя"]'
*/

/* const json = '["Коля", "Вася", "Петя"]';
const json2 = '["Коля", "Вася, "Петя"]';

try {
    console.log(JSON.parse(json)[2]);
    console.log(JSON.parse(json2)[2]);
} catch (error) {
    alert('Не валидный JSON')
} */

/* 2. Сделать таймер. Длительность - 10 секунд. После истечения 10 секунд показать alert("Время вышло!") */

/* let counter = 10;
let div = document.querySelector('div');

let timer = setInterval((e) => {
    div.innerText = `00:${counter === 10 ? counter : '0' + counter}`
    counter--;
    if (counter < 0) {
        clearInterval(timer);
        alert("Время вышло!")
    }
}, 1000); */

/* 3. Сделать превью фильма.
var filmDetails = '{"Title":"Star Wars: Episode IV - A New Hope","Year":"1977","Released":"25 May 1977","Runtime":"121 min"}'
3.1  Распарсить Json, сгенерировать разметку.
3.2  Добавить кнопку редактирования, по нажатию на кнопку, div текстом заменяются инпутами с предустановленными value. */

let filmDetails = '{"Title":"Star Wars: Episode IV - A New Hope","Year":"1977","Released":"25 May 1977","Runtime":"121 min"}';

let div = document.querySelector('div');
let btn = document.querySelector('button');

let input = document.createElement('input');
input.setAttribute('type', 'text');

let obj = JSON.parse(filmDetails);

div.innerText = `
    Title: ${obj.Title}
    Year: ${obj.Year}
    Released: ${obj.Released}
    Runtime: ${obj.Runtime}
`

btn.addEventListener('click', () => {

    div.innerHTML = `
    <label>Title: </label>
    <input type="text" value="${obj.Title}">

    <label>Year: </label>
    <input type="text" value="${obj.Year}">

    <label>Released: </label>
    <input type="text" value="${obj.Released}">

    <label>Title: </label>
    <input Runtime="text" value="${obj.Runtime}">
    `
})


