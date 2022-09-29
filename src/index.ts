// string, boolean, number, ...
let x: number = 10;

x = 12;

console.log(x);

// interferencia x annotation
let y = 12;
// y = "teste";

let z: number = 12;

// tipos básicos
let firstName: string = "Lucas";
let age: number = 28;
const isAdmin: Boolean = true;

// string != string

console.log(typeof firstName);

firstName = "Lcourse";

console.log(firstName);

// object
const myNumbers: number[] = [1, 2, 3];

console.log(myNumbers);
console.log(myNumbers.length);
// console.log(myNumbers.parseFloat());
console.log(firstName.toUpperCase());
myNumbers.push(5);

console.log(myNumbers);

// tuplas -> tuple
let myTuple: [number, string, string[]];

myTuple = [5, "teste", ["a", "b"]];

// myTuple = [true, false, true];

// object literals -> {prop: value}
const user: { name: string; age: number } = {
  Name: "Lucas",
  age: 28,
};
console.log(user);

console.log(user.name);

// user.job = "Programador"

//any
let a: any = 0;

a = "teste";
a = true;
a = [];

// union type
let id: string | number = "10";

id = 200;

// id = true
// id = []

// type alias
type myIdType = number | string;

const userId: myIdType = 10;
const productId: myIdType = "00001";
const shirId: myIdType = 123;

// enum
// tamanho de roupas (size: Médio, size: Pequeno)
enum size {
  P = "Pequeno",
  M = "Médio",
  G = "Grande",
}

const camisa = {
  name: "Camisa gola V",
  size: size.G,
};

console.log(camisa);

// literal types
let teste: "autenticado";

// teste = "outrovalor";
teste = "autenticado";

// funcoes
function sum(a: number, b: number) {
  return a + b;
}

console.log(sum(12, 12));
// console.log(sum("12", true))

function sayHelloTo(name: string): string {
  return `hello ${name}`;
}

console.log(sayHelloTo("Lucas"));

function logger(msg: string): void {
  console.log(msg);
}

logger("Teste!");

function greeting(name: string, greet?: string) {
  if (greet) {
    console.log(`Olá ${greet} ${name}`);
    return;
  }
  console.log(`Olá ${name}`);
}

greeting("Lcourse");
greeting("Lucas", "Sir");
