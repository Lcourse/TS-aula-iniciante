"use strict";
// string, boolean, number, ...
let x = 10;
x = 12;
console.log(x);
// interferencia x annotation
let y = 12;
// y = "teste";
let z = 12;
// tipos básicos
let firstName = "Lucas";
let age = 28;
const isAdmin = true;
// string != string
console.log(typeof firstName);
firstName = "Lcourse";
console.log(firstName);
// object
const myNumbers = [1, 2, 3];
console.log(myNumbers);
console.log(myNumbers.length);
// console.log(myNumbers.parseFloat());
console.log(firstName.toUpperCase());
myNumbers.push(5);
console.log(myNumbers);
// tuplas -> tuple
let myTuple;
myTuple = [5, "teste", ["a", "b"]];
// myTuple = [true, false, true];
// object literals -> {prop: value}
const user = {
    Name: "Lucas",
    age: 28,
};
console.log(user);
console.log(user.name);
// user.job = "Programador"
//any
let a = 0;
a = "teste";
a = true;
a = [];
// union type
let id = "10";
id = 200;
const userId = 10;
const productId = "00001";
const shirId = 123;
// enum
// tamanho de roupas (size: Médio, size: Pequeno)
var size;
(function (size) {
    size["P"] = "Pequeno";
    size["M"] = "M\u00E9dio";
    size["G"] = "Grande";
})(size || (size = {}));
const camisa = {
    name: "Camisa gola V",
    size: size.G,
};
console.log(camisa);
// literal types
let teste;
// teste = "outrovalor";
teste = "autenticado";
// funcoes
function sum(a, b) {
    return a + b;
}
console.log(sum(12, 12));
// console.log(sum("12", true))
function sayHelloTo(name) {
    return `hello ${name}`;
}
console.log(sayHelloTo("Lucas"));
function logger(msg) {
    console.log(msg);
}
logger("Teste!");
function greeting(name, greet) {
    if (greet) {
        console.log(`Olá ${greet} ${name}`);
        return;
    }
    console.log(`Olá ${name}`);
}
greeting("Lcourse");
greeting("Lucas", "Sir");
