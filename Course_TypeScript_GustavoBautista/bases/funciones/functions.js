"use strict";
(function () {
    //creamos una constqante lamada hero de tipo string
    var hero = 'Flash';
    //funcion de la forma tradicional
    //siempre hay que retornar el tipo de valor de la funcion , en este caso es (String) 
    function returnName() {
        //vamos a retornar el hero
        return hero;
    }
    //activateBatisignal es una funcion que regresa un string
    var activateBatisignal = function () {
        return 'Batiseñal activada';
    };
    console.log(typeof activateBatisignal);
    //!IMPORTANTE:
    //!simpre nos acostrumbremos a colocar el tipo de dato de una funcion siempre simepre siempre........
    //!por que el dia de manñana alguien puede usar mi funcion, metodos, objetos, classes, lo que sea que yo haga
    var heroName = returnName(); // aqui nos sale que es string
})();
