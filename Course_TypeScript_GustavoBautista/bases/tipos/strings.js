"use strict";
(() => {
    var _a;
    //tres formas de declaran un string
    const batman = 'Batman';
    const linternaVerde = "linternaVerde";
    const bolcanNegro = `Heroe: volcanNegro`;
    const abc = 123;
    console.log(`I'm ${batman}`); //cuando tenermos una palabra que se utiliza el comilla simple (') ahi recien se puede usar backticks
    console.log(batman.toUpperCase()); //BATMAN todo en mayuscula
    //typeScript no les va asegurar no cometer errrores
    //ejm;
    console.log(((_a = batman[10]) === null || _a === void 0 ? void 0 : _a.toUpperCase()) || 'no esta presente');
    //el ---> (?) este es un null check 
})();
