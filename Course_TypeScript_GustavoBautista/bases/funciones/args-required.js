"use strict";
(function () {
    //!PARAMETROS OBLIGATORIOS DE LAS FUNCIONES
    //creamos una nueva funcion
    //constante fullName va ser igual a una funcion de flecha
    //como primer argumento tenermos firstName y segundo lastName ----> que va regresar un string
    var fullName = function (firstName, lastName) {
        //gregsamos el valor
        return "".concat(firstName, ", ").concat(lastName);
    };
    // si yo quisera utilizar esta funcion 
    //tendria que almacenar en una variable o imprimir en consola
    // ejm:
    var name = fullName('gustavo', 'bautista');
    //luego imprimimos el name en consola si la quiseramos ver
    console.log([name]);
})();
//# sourceMappingURL=args-required.js.map