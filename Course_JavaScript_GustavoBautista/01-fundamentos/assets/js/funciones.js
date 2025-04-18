

// function saludar(){
//     console.log('Hola Gustavo');
// }
// saludar(); //llama a la funcion

//este es una funcion de saludo
function saludar( nombre ) { //asi se defide una funcion
    console.log(arguments); //esto es un objeto que contiene los argumentos que se le pasan a la funcion
    console.log('Hola' + nombre); //esto va concatenar 
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
saludar('gustavo', 40 , true, 'Costa Rica');//llama a la funcion 
saludar2('Gustavo');//llama a la funcion
//............................................................

//llama a la funcion flecha
saludarFecha();//llama a la funcion flecha
saludarFecha2('Gustavo');//llama a la funcion flecha