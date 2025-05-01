"use strict";
(function () {
    //vamos a crearnos 3 funciones
    //la funcion addNumbers que va recibir a como numero , b como numero
    var addNumbers = function (a, b) { return a + b; };
    //funcion saludar
    var greet = function (name) { return "hola ".concat(name); };
    //otra funcion
    var saveTheWorld = function () { return "el mundo esta salvado"; };
    //!TENEMOS 3 FUNCIONES DIFERENTES
    //? FUNCION 1 : recibe 2 numeros a y b que son de tipo numero y regresa un numero
    //?FUNCION2 : saludar es una funcion que recibe un argumento (name) que es string y regresa un string
    //?FUCNION3: salvar el mundo es una funcion en la cual no recibe ningun argumentoy retorna un string
    //creamos una variable qu no tiene tipo de dato
    // let myFunction: (y:number, z: number) => number;// este para la funion de numeros
    // let myFunction: (y:string) => string;// regresa un string
    var myFunction; //regresa un string 
    // myFunction = addNumbers 
    // console.log(myFunction(1,2))
    2;
    // myFunction = greet 
    // console.log(myFunction('Gustavo'))
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
