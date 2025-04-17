//tres tipo de formas de ingreso de informacion de usario


//1 alert
//esta instruccion es bloqueante, bloquea la ejecucion web y no va seguir ejecutando ninguna liea de codigo hasta que el usuario haga Click aqui
alert('Hola Mundo desde alerts.js');

//2 prompt
//se envias argumentos
//el let nombre 
//el prompt es una funcion
// = operador de asignacion
let nombre = prompt('whats your name?');
console.log('****' + nombre + '****');


//3 confirm
const seleccion = confirm('Are you sure?');
console.log(seleccion);
//el confirm es una funcion

// console.log(global)

//alert = existe
//prompt = como pregunta 
//confirm = confirmacion que si acepta o no acepta