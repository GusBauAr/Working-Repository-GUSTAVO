
// import { printObject, genericFunction,genericFunctionArrow } from "./generics/generics";
// import { Villain, Hero } from "./interfaces";

import { getPokemon } from "./generics/get-pokemon";

// // import { Hero } from "./interfaces/hero";
// // import { Villain } from "./interfaces/villain";


// //!IMPORTANTE
// //?QUE ES UNA FUNCION GENERICA
// //Es una funcion que recibe cualquier tipo de argumento


// //en este caso llamamos de la carpeta generics.ts
// //esta es una funcion generica simple
// // printObject(123);//number
// // printObject(new Date());//fecha en javaScript
// // printObject({a:1, b:2, c:3 }); // objeto
// // printObject([1,2,3,4,5,6,7,8,9,10]);//arreglo
// // printObject(['hola mundoooo Gus']);//string

// //................................................................................
// //vamos a llamar al genericFunction
// // console.log(genericFunctionArrow(3.35527).toFixed(2)); //este toFixed es para mostrar 2 decimales-----> es de tipo numerico
// // console.log(genericFunctionArrow('Hola mundo gus').toUpperCase());//nos sale error-----> es de tipo string
// // console.log(genericFunctionArrow(new Date()).getDate());//nos sale error----> es de tipo date

// //no se puede y aqui es donde entra los genericos
// //nosostros sabemos que esta funcion puede recibir cualquier tipo de objeto pero la salida va ser exactamento igual al mismo objeto de entada
// //si mando un number voy a tener metodos y propiedades de numeros
// //si mando un string voy a tener metodos y propiedades de un string
// //.....................................................................................


// //creamo suna nueva constante

// const deadPool = { //deadPool es un objeto
//     name:'DeadPool',
//     realName: 'Wate Winston Wilson',
//     dangerLevel: 130,
// }

// //llamaos a genericFunctionArrow
// console.log(genericFunctionArrow<Villain>(deadPool))
// //............................................................................


//............................................................................................
//!EJEMPLO APLICADO A GENERICO
//instalamos axios para hcer peticiones htpp


//ahora hacemos i  console.log del resultado de getPokemon 
// console.log(getPokemon()); //resultado 1
//........................................................................................


//nos sale los metodos propios de las promesas:
//them: cuando se resuelva
//finally: cundo termina
//catch:por si da un error
getPokemon(4)//se va quejar por que esta esperanod un argumento colocamos numero 4
    .then(resp => console.log(resp))
    .catch(error => console.error(error))
    .finally(() => console.log('fin del getPokemon'));
