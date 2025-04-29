"use strict";
(function () {
    //colocamos de tipo never--->el valor de retorno de mi funcion  es never
    //el never no es undefined ni void
    //el never es never
    //!IMPORTANTE
    //?lo que hicimos es especificar una funcion cuyo tipo de dato de retorno es never
    var error = function (message) {
        //el never significa que mi funcion no debe de terminar exitosamente 
        throw new Error(message);
    };
    error('!Auxilio');
    //si nostros colocamos un (console.log) no nos va dejar ejecutar
    console.log('hola mundo');
    //el never dice que no tiene que haver un punto alcanzable al finalizar la funcion
    //..................................................................
    // el never tien un punto de retorno puede que todo el bloque if no se ejecute
    var error2 = function (message) {
        if (false) {
            throw new Error(message);
        }
        //si nostros colocamos return 1
        //tenemos que especificar que nuestra funcion regresa (NEVER O UN NUMBER)
        return 1;
        //arriba especificamos eso en el:
        // const error2 = (message: string): (never | number) =>  
    };
    error2('!Auxilio');
})();
