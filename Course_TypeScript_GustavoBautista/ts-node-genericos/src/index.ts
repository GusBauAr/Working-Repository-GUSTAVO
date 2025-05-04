import { printObject, genericFunction } from "./generics/generics";


//!IMPORTANTE
//?QUE ES UNA FUNCION GENERICA
//Es una funcion que recibe cualquier tipo de argumento


//en este caso llamamos de la carpeta generics.ts
//esta es una funcion generica simple
// printObject(123);//number
// printObject(new Date());//fecha en javaScript
// printObject({a:1, b:2, c:3 }); // objeto
// printObject([1,2,3,4,5,6,7,8,9,10]);//arreglo
// printObject(['hola mundoooo Gus']);//string

//................................................................................
//vamos a llamar al genericFunction
console.log(genericFunction(3.35527).toFixed(2)); //este toFixed es para mostrar 2 decimales
console.log(genericFunction('Hola mundo gus').toFixed(2));//nos sale error
console.log(genericFunction(new Date()).toFixed(2));//nos sale error

//no se puede y aqui es donde entra los genericos
//nosostros sabemos que esta funcion puede recibir cualquier tipo de objeto pero la salida va ser exactamento igual al mismo objeto de entada
//si mando un number voy a tener metodos y propiedades de numeros
//si mando un string voy a tener metodos y propiedades de un string
 

