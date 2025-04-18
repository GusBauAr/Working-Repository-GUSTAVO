


let a = 10; //primitivos
let b = a;//primitivos
a = 30; //cuando nsotros trabajamos con primitivos,cualquier tipo de asignacion como a=30; lo estamos mandando por valor, no importa si transformamos la variable o le asignamos otra cosa, no estamos afectando el mismo lugar en memoria
console.log({a, b}); // 30 10

// {a: 30, b: 10}
// a: 30
// b: 10
// [[Prototype]]: Object


// .................................................................................................................
let juan = {nombre: 'Juan'}; // en javascript todos los objetos son pasados por referencia
let ana  = juan; //referencia
ana.nombre = 'Ana'; //referencia
//cuando trabajamos con objetos, si le asignamos una variable a otra, lo que estamos haciendo es apuntar a la misma referencia en memoria, por lo tanto si cambiamos el valor de una de las variables, se va a ver reflejado en la otra
console.log({juan, ana}); // {nombre: 'Ana'} {nombre: 'Ana'}

// {juan: {…}, ana: {…}}
// ana: {nombre: 'Ana'}
// juan: {nombre: 'Ana'}
// [[Prototype]]: Object


// .................................................................................................................

const cambiaNombre = (persona) => { //este es una funcion que recibe un objeto y lo modifica
    persona.nombre = 'Tony';
    return persona; 
}
let peter = {nombre: 'Peter'};
let tony = cambiaNombre(peter); //lo que se hizo fue mandar a peter (objeto) a la funcion y este peter esta pasando por refenrcia a esta funcion,entonces cualquier modificacion que se le haga a este argumento o mejor dicho a este objeto va hacer afectado si nosotros lo retornamos.
console.log({peter, tony}); // {nombre: 'Tony'} {nombre: 'Tony'}

// {peter: {…}, tony: {…}}
// peter: {nombre: 'Tony'}
// tony: {nombre: 'Tony'}
// [[Prototype]]: Object

//..................................................................................................................

let gustavo = {nombre: 'Gustavo'}; // en javascript todos los objetos son pasados por referencia, el {nombre:'Gustavo'}cesta en memeoria
let noelia  = {...gustavo}; //los (...)operador spread, separa los elemntos, la ventaja es que si nosotros hacemos esto, rompe la referencia que hay en javascript, y de esa manera poder trabajar con los objetos sin que se vean afectados entre si, es decir, si yo cambio el nombre de ana, no se va a ver afectado el nombre de gustavo que esta en memeoria.
noelia.nombre = 'Noelia'; //referencia
console.log({gustavo, noelia}); // {nombre: 'Gustavo'} {nombre: 'Noelia'}

// {gustavo: {…}, noelia: {…}}
// gustavo: {nombre: 'Gustavo'}
// noelia: {nombre: 'Noelia'}
// [[Prototype]]: Object



//..................................................................................................................

const cambiaNombre2 = ({...persona}) => { //(...persona)este no es un operador spread, es un operador rest, lo que hace es recibir todos los argumentos que le pasemos y los convierte en un array
    persona.nombre = 'Erika';
    return persona; 
}
let carlos = {nombre: 'Carlos'};
let erika = cambiaNombre2(carlos); 
console.log({carlos, erika}); // {nombre: 'Carlos'} {nombre: 'Erika'}

// {carlos: {…}, erika: {…}}
// carlos: {nombre: 'Carlos'}
// erika: {nombre: 'Erika'}
// [[Prototype]]: Object


//..................................................................................................................
//ARREGLOS
const frutas = ['Manzana', 'Pera', 'Piña'];
const otrasFrutas = [...frutas]; //si es un arreglo es recoemndable colocarlo en [] este es un nuevo areglo y utilizando el operador spread, lo que hace es separar los elementos y los coloca en un nuevo arreglo, de esta manera no se afecta el arreglo original

otrasFrutas.push('Mango'); //referencia
console.table({frutas, otrasFrutas}); // ['Manzana', 'Pera', 'Piña', 'Mango'] ['Manzana', 'Pera', 'Piña', 'Mango']

// (index)         0           1         2          3
// frutas	    'Manzana'	 'Pera'     'Piña'	
// otrasFrutas	'Manzana'	 'Pera' 	'Piña' 	  'Mango'

// Object
// frutas: (3) ['Manzana', 'Pera', 'Piña']
// otrasFrutas: (4) ['Manzana', 'Pera', 'Piña', 'Mango']
// [[Prototype]]:Object
//..................................................................................................................
