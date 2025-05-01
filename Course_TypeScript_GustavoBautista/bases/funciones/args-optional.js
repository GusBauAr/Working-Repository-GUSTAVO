"use strict";
(function () {
    //cuando nosotros colocamos el (?)signo de insterrogacion significa que es opcional al tipo de valor lo coloca opcional
    var fullName = function (firstName, lastName) {
        return "".concat(firstName, ", ").concat(lastName || 'no lastname');
    };
    var name = fullName('gustavo'); // el consola sale gustavo undefined
    //pero si no tiene nombre al lastName colocamos un operador ( || OR ) colocando que no tiene apellido(no lastname) ${lastName || 'no lastname'}
    console.log([name]);
})();
