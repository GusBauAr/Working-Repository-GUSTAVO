"use strict";
(function () {
    // Tipos
    var batman = 'Bruce'; //✅🐱
    var superman = 'Clark'; //✅🐱
    var existe = false; //✅🐱
    // Tuplas
    var parejaHeroes = [batman, superman];
    parejaHeroes[0] = 'batman';
    parejaHeroes[1] = 'superman';
    var villano = ['Lex Lutor', 5, true];
    villano[0] = 'lex lutor';
    villano[1] = 5;
    villano[2] = true;
    // Arreglos
    var aliados = ['Mujer Maravilla', 'Acuaman', 'San', 'Flash'];
    //Enumeraciones
    var fuerzaFlash = 5;
    var fuerzaSuperman = 100;
    var fuerzaBatman = 1;
    var fuerzaAcuaman = 0;
    var fuerzaHeroes;
    (function (fuerzaHeroes) {
        fuerzaHeroes[fuerzaHeroes["fuerzaAcuaman"] = 0] = "fuerzaAcuaman";
        fuerzaHeroes[fuerzaHeroes["fuerzaBatman"] = 1] = "fuerzaBatman";
        fuerzaHeroes[fuerzaHeroes["fuerzaFlash"] = 5] = "fuerzaFlash";
        fuerzaHeroes[fuerzaHeroes["fuerzaSuperman"] = 100] = "fuerzaSuperman";
    })(fuerzaHeroes || (fuerzaHeroes = {}));
    var fuerza = fuerzaHeroes.fuerzaAcuaman;
    var fuerza = fuerzaHeroes.fuerzaBatman;
    var fuerza = fuerzaHeroes.fuerzaFlash;
    var fuerza = fuerzaHeroes.fuerzaSuperman;
    // Retorno de funciones
    function activar_batiseñal() {
        return 'activada';
    }
    function pedir_ayuda() {
        console.log('Auxilio!!!');
    }
    // Aserciones de Tipo
    var poder = '100';
    var largoDelPoder = poder.length;
    console.log(largoDelPoder);
})();
