"use strict";
(function () {
    //este es un arreglo de numeros
    var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    //este es un arreglo de numeros o de strings??? (String | numbers)
    var numberr = [1, 2, 3, 4, '5', 6, 7, 8, 9, 10];
    //aqui o permite como number or string
    numberr.push(11); //como numero
    numberr.push('dddd'); // como string
    console.log(numberr);
    //...........................................................................
    //este es un tipo numerico y vemos que me esta saliendo error en el numerom ('5') por que es un string y nosotros estamos definindo de tipo numerico
    var number2 = [1, 2, 3, 4, '5', 6, 7, 8, 9, 10];
    //esto es muy raro verlo pero estamos defininedo number, string y boolean, no se ve eso
    var number3 = [1, 2, 3, 4, '5', 6, 7, 8, 9, 10];
    number3.push(true);
    //............................................................................
    //este es un arreglo de solo numeros
    var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    console.log(numbers);
    //................................................................
    var villian = ['omega rojo', 'dormammu', 'duende verde'];
    // se crea un callback function que va ser de tipo string
    //toUpperCase viene de los strings
    //----> (v) es un string 
    villian.forEach(function (v) { return console.log(v.toUpperCase()); });
})();
