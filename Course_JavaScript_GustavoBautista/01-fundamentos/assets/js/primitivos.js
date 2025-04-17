
let nombre = 'Peter Parker';
console.log( nombre );

nombre = 'Ben Parker'; //commilla simple
console.log( nombre );

nombre = "Tia May"; //stirng
nombre = `Tia May`; //backtick

console.log( typeof nombre ); //en la consola del navegador me sale string

nombre = 123;
console.log( typeof nombre ); //en la consola del navegador me sale number


let esMarvel = false; //boolean
console.log( typeof esMarvel ); //en la consola del navegador me sale boolean

let edad = 33; //number
console.log( typeof edad ); //en la consola del navegador me sale number

edad = 33.0; //number
console.log( typeof edad ); //en la consola del navegador me sale number

let superPoder;
console.log(typeof superPoder) //undefined

let soyNull = null;
console.log(typeof soyNull) //object

let symbol1 = Symbol('a');
let symbol2 = Symbol('a');
console.log(typeof symbol1); //symbol
console.log(typeof symbol2); //symbol

console.log( symbol1 === symbol2 ); //false

