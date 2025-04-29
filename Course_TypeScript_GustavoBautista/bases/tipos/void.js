"use strict";
(function () {
    // void significa vacio
    // en una funcion que no sale nada (void) es correcto colocarlo void
    //despues d elos parentesis ()el tipo de retorno colocamos void 
    function callBatman() {
    }
    //si nostros creamos una constante
    var a = callBatman();
    //la letra (a) si mantenemos el cursor nos sale Void , quiere decir que no hay nada  
    console.log(a); //si le ejcutamos nos sale undefined
    //undefined no es igual a null
    //.........................................................
    // en una funcion de flecha lo mismo
    var callBatmann = function () {
        //si nostros colocamos algo dentro se va quejar 
    };
    //!IMPORTANTE
    //?el void es muy utilizado que mi funcion no regresa nada y eso ayuda mucho en la documentacion y lectura de nuestras funciones
})();
