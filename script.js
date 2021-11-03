"use strict";

/* const none = new Number(3);

console.log(none); */


// Функция-конструктор (ES5)
// Функция-конструктор служит для создания объектов
function User (name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    //Кроме свойств сюда можно задать методы
    this.hello = function ()  {
        console.log(`Hello ${this.name}`);
    }
}

//Добавление нового свойтсва в User
User.prototype.exit = function() {
    console.log(`Пользователь ${this.name} ушел`);
}

const alex = new User ('Alex', 28);
const ivan = new User ('Ivan', 30);

console.log(alex);
console.log(ivan);

alex.exit();

//вызов метода
alex.hello();
ivan.hello();
