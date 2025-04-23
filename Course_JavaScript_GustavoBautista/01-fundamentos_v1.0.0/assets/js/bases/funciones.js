

function saludar(){

     console.log('Hola Gustavow');
}
saludar(); //llama a la funcion

//este es una funcion de saludo
function saludar( nombre ) { //asi se defide una funcion
    //console.log(arguments); //esto es un objeto que contiene los argumentos que se le pasan a la funcion
    //console.log('Hola' + nombre); //esto va concatenar
    //cuano la funcion no tiene un return, el valor por defecto es 'undefined'
    return [1, 2, 3, 4, 5]; //esto es un return 

    console.log('soy un codigo que esta despues del return'); //esto no se va a ejecutar,por que le funcion va linea por linea
    //cuando se encuentra un return, la funcion termina
}

const saludar2 = function(nombre){ 
    console.log('Hola' + nombre);
}

//.............................................................
//este es una funcion de fecha
const saludarFecha = ()=>{ 
    console.log('Hola flecha');
}

const saludarFecha2 = ( nombre )=>{ //llama a un argumento
    console.log('Hola' + nombre);
}
//.............................................................
//llama a la funcion
 const retornoDeSaludar = saludar('gustavo', 40 , true, 'Costa Rica');//llama a la funcion va ser 1
 console.log({retornoDeSaludar}); //esto va a imprimir 1

saludar2('Gustavo');//llama a la funcion
//............................................................

//llama a la funcion flecha
saludarFecha();//llama a la funcion flecha
saludarFecha2('Gustavo');//llama a la funcion flecha


//.............................................................
function sumar( a, b ) { //esto es una funcion que suma
    return a + b; //esto es un return 
}


//se transforma la funcion en una funcion de flecha
const sumar2 = ( a, b ) => { //esto es una funcion que suma
    return a + b; //esto es un return 
}

// se puede resumir la funcion de flecha
const sumar3 = ( a, b ) => a + b; //esto es una funcion que suma
//..................................................................

function getAleatorio(){ //numeros aleatorios
    //esto es una funcion que devuelve un numero aleatorio
    return Math.random(); //esto es un return 
}
//esta funcion lo voy a colocar en fecha que no tenga llaves {}
const getAleatorio2 = () => Math.random(); //esto es un return resumido
//..................................................................

console.log(sumar( 1, 2 )); //esto va a imprimir 3, esta con dos argumentos
console.log(sumar2( 2, 2 )); //esto va a imprimir 3, esta con dos argumentos la funcion de flecha
console.log(sumar3( 3, 3 )); //esto va a imprimir 3, esta con dos argumentos la funcion de flecha rersumida
console.log(getAleatorio()); //esto va a imprimir un numero aleatorio
console.log(getAleatorio2()); //esto va a imprimir un numero aleatorio en flecha
//..........................................................

//SUMA

function sumar (num1, num2){
    let respuesta; //variable

    respuesta = num1 + num2; 

    return respuesta; //retornas la variable
}
let suma = sumar (5,5);
console.log("la suma es:", suma);



function buenasTardes (nombre, apellido){
    return 'buenas tardes ' + nombre + apellido;
}
console.log(buenasTardes('Noelia'+ 'bautista'));

//..........................................
function sumar4 (num1, num2){
    return 'la suma es:' + (num1 + num2);
}
console.log(sumar4(1,5));
//........................................

const sumar5 = (num1, num2) => 'la suma es:' + (num1 + num2);
console.log(sumar5(1,5))










