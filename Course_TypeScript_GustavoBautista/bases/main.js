"use strict";
(function () {
    var a = 10;
    var b = 10;
    var a2 = 10;
    var b2 = 10;
    var a3 = 10;
    var b3;
    b3 = 32323;
    var a4 = 10;
    var b4;
    b4 = {};
    b4 = [];
    b4 = true;
    function sayHelloo(msg) {
        console.log(msg + ' ' + 'Gustavo');
    }
    (function () {
        var aa = 10;
        console.log(aa);
    })();
})();
(function () {
    var fullName = function (firstName, lastName, upper) {
        if (upper === void 0) { upper = false; }
        if (upper) {
            return "".concat(firstName, ", ").concat(lastName || '------').toUpperCase();
        }
        else {
            return "".concat(firstName, ", ").concat(lastName || 'no lastname');
        }
    };
    var name = fullName('gustavo', 'bautista', true);
    console.log([name]);
})();
(function () {
    var fullName = function (firstName, lastName) {
        return "".concat(firstName, ", ").concat(lastName || 'no lastname');
    };
    var name = fullName('gustavo');
    console.log([name]);
})();
(function () {
    var fullName = function (firstName, lastName) {
        return "".concat(firstName, ", ").concat(lastName);
    };
    var name = fullName('gustavo', 'bautista');
    console.log([name]);
})();
(function () {
    var fullName = function (firstName) {
        var restArgs = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            restArgs[_i - 1] = arguments[_i];
        }
        return "".concat(firstName, " ").concat(restArgs.join(' '));
    };
    var superman = fullName('Clark', 'Joseph', 'kent');
    console.log({ superman: superman });
})();
(function () {
    var addNumbers = function (a, b) { return a + b; };
    var greet = function (name) { return "hola ".concat(name); };
    var saveTheWorld = function () { return "el mundo esta salvado"; };
    var myFunction;
    2;
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
(function () {
    var hero = 'Flash';
    function returnName() {
        return hero;
    }
    var activateBatisignal = function () {
        return 'Batiseñal activada';
    };
    console.log(typeof activateBatisignal);
    var heroName = returnName();
})();
function sumar(a, b) {
    return a + b;
}
var contar = function (heroes) {
    return heroes.length;
};
var superHeroes = ["Flash", "Arrow", "Superman", "Linterna Verde"];
contar(superHeroes);
var llamarBatman = function (llamar) {
    if (llamar === void 0) { llamar = true; }
    if (llamar) {
        console.log("Batiseñal activada");
    }
};
llamarBatman();
var unirheroes = function () {
    var personas = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        personas[_i] = arguments[_i];
    }
    return personas.join(", ");
};
var noHaceNada = function (numero, texto, booleano, arreglo) { };
var noHaceNadaTampoco;
noHaceNadaTampoco = noHaceNada;
(function () {
    var _a;
    var flash = {
        name: 'Gustavo Bautista',
        age: 24,
        powers: ['super velocidad', 'viajar en el tiempo']
    };
    flash = {
        name: 'Clark kent',
        age: 60,
        powers: ['super', 'fuerza'],
    };
    var flash2 = {
        name: 'Gustavo Bautista',
        age: 24,
        powers: ['super velocidad', 'viajar en el tiempo']
    };
    flash2 = {
        name: 'Clark kent',
        powers: ['super', 'fuerza'],
    };
    var flash3 = {
        name: 'Gustavo Bautista',
        age: 24,
        powers: ['super velocidad', 'viajar en el tiempo']
    };
    flash3 = {
        name: 'Clark kent',
        powers: ['super', 'fuerza'],
        getName: function () {
            return this.name;
        }
    };
    console.log((_a = flash3.getName) === null || _a === void 0 ? void 0 : _a.call(flash3));
    var flash4 = {
        name: 'Gustavo Bautista',
        age: 24,
        powers: ['super velocidad', 'viajar en el tiempo']
    };
    var superman = {
        name: 'Clark Kent',
        age: 60,
        powers: ['super velocidad']
    };
})();
(function () {
    var flash = {
        name: 'Gustavo Bautista',
        age: 24,
        powers: ['super velocidad', 'viajar en el tiempo']
    };
    var superman = {
        name: 'Clark Kent',
        age: 60,
        powers: ['super velocidad'],
        getName: function () {
            return this.name;
        }
    };
})();
(function () {
    var myCustomVariable = 'gustavo';
    console.log(typeof myCustomVariable);
    myCustomVariable = 20;
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name: 'osmar',
        age: 30,
        powers: [1]
    };
    console.log(typeof myCustomVariable);
    console.log(myCustomVariable);
})();
var batimovil = {
    carroceria: "Negra",
    modelo: "6x6",
    antibalas: true,
    pasajeros: 4
};
var bumblebee = {
    carroceria: "Amarillo con negro",
    modelo: "4x2",
    antibalas: true,
    pasajeros: 4,
    disparar: function () {
        console.log("Disparando");
    }
};
console.log('estoy aqui');
var villanos = [{
        nombre: "Lex Luthor",
        edad: 54,
        mutante: false
    }, {
        nombre: "Erik Magnus Lehnsherr",
        edad: 49,
        mutante: true
    }, {
        nombre: "James Logan",
        edad: 50,
        mutante: true
    }];
console.log('ahora estoy aqui');
var charles = {
    poder: "psiquico",
    estatura: 1.78
};
var apocalipsis = {
    lider: true,
    miembros: ["Magneto", "Tormenta", "Psylocke", "Angel"]
};
var mystique;
mystique = charles;
mystique = apocalipsis;
console.log('estoy aqui');
//# sourceMappingURL=main.js.map