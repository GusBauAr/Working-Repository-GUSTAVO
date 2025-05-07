
//funciones en javaScript
//!...................................................
//creamo suna funcion basica
//!NO ES RECOMENDABLE CREAR FUNCIONES DE ESTA MANERA
function saludar (nombre){
    return`hola, ${nombre}`;//regresa un string
};
saludar = 30;
console.log(saludar);
// console.log(saludar('Gustavo'));
//!.................................................





//*SERIA ASI TRADICIONAL.......................................
//creamos una constante
const saludar2 = function (nombre){
    return`hola, ${nombre}`;//regresa un string
};

console.log(saludar2);
//.............................................................



//*TRANSFORMACION A UNA FUNCION DE FLECHA =>.........
const saludar3 = (nombre) =>{ //esta es la funcion de felcha larga con return
    return`hola, ${nombre}`;//regresa un string
};

//cuando una funcion de flecha tiene un return
const saludar4 = (nombre) =>`hola, ${nombre}`;// esta es la funcion de flecha corta
const saludar5 = () =>`hola mundo`;


console.log(saludar3 ('ozzy'))//hola ozzy
console.log(saludar4('gusgus'));//hila gusgus
console.log(saludar5());//hola mundo


//..............................................................
//seguimos con funcoion de flecha

//creao suna funcion 
// const getUser = () =>{
//     return{
//         uid:'ABC123',
//         userName:'El_papi1502'
//     }
// }

//!este es otro metodo de funciones de flecha, sin return
const getUser = () =>({
       uid:'ABC123',
       userName:'El_papi1502'
});
console.log(getUser());


//................................................................
//!TAREA
//!1transformar funcion de flecha
//!2 tiene que retonar  un objeto implicito
//!3pruebas

// function getUsuarioActivo(nombre){
//     return{
//         uid:'ABC123343',
//         userName:nombre,

//     }
// };

// const usuarioActivo = getUsuarioActivo('gustavo');
// console.log(usuarioActivo);
//...............................................................

const getUsuarioActivo = (nombre) => ({
        uid:'ABC123343',
        userName:nombre,
});

const usuarioActivo = getUsuarioActivo('gustavoBAUTSTA');
console.log(usuarioActivo);