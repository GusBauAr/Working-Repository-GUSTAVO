"use strict";
(function () {
    //ste es una tuple dentro de las llaves [string | number] si siempre quieres que el primer valor sea un string y siempre el segundo valor sea un number
    var hero = ['dr strange', 100];
    //!IMPORTANTE
    // nos sale error que numero no es asignado como tipo string
    hero[0] = 50;
    //nos sale error que string no es asignado como tipo number
    hero[1] = 'Ironman';
    //!IMPORTANTE
    // si cambiamos la posicion de los valores ahi si nos va dar
    // primero esta asignado como string y segundo como number
    hero[0] = 'Ironman';
    hero[1] = 50;
    console.log(hero);
    //?tambien se puede asignar un boolean pero simepre respetanfo el orden
    // const hero: [string, number] =['dr strange', 100];
    //..................................................................................
})();
