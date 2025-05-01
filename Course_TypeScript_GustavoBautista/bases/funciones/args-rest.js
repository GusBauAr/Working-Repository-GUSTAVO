"use strict";
(function () {
    //creamo suna funcion y la salida de mi funcion va ser string 
    var fullName = function (firstName) {
        //y quiero toda la concatenacion de todos los argumentos  que yo resivo
        //ejm:primero el firstName y luego lo demas pero comomhago eso?????????
        //!IMPORTANTE 
        //?aqui es donde viene el REST ARGUMENTS es decir el resto de argumentos 
        //lo cual es una funcion que ya es utilizada en mucho tiempo en javascript se usa mucho
        //por que una funcion puede tener muchos argumentos.
        //!PERO COMO ATRAPO TODOS ESOS ARGUMENTOS??????/
        //Se coloca el operador REST (...) tres puntitos y luego la propiedad que queramos recibir  en este caso se va llamar (restArgs) y hay que especificar que va ser de tipo string como un arreglo (string []) o tambien podemos colocar de tipo number, boolean, etc......
        var restArgs = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            restArgs[_i - 1] = arguments[_i];
        }
        //ahora si yo quiero unir todos los nombres utilizamos ${restArgs} y uego unirlos con el (.join('espacio')....)
        return "".concat(firstName, " ").concat(restArgs.join(' '));
    };
    //vamos a llamar a mi funcion que vamos a mandar tres argumentos
    //ahora lo que quiero es que (Clark) sea obligatorio, ahora quiero hacer mi funcion cuyo primer valor va ser obligatorio, todo lo demas va ser opcional
    var superman = fullName('Clark', 'Joseph', 'kent');
    console.log({ superman: superman });
})();
