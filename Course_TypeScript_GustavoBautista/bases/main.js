"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
(function () {
    var avengers = {
        nick: 'samuel',
        ironman: 'robert',
        vision: 'paul',
        activo: true,
        poder: 1500.23452,
    };
    var poder = avengers.poder, vision = avengers.vision;
    console.log(poder.toFixed(2), vision.toUpperCase());
    var printAvengers = function (_a) {
        var ironman = _a.ironman, resto = __rest(_a, ["ironman"]);
        console.log(ironman, resto);
    };
    printAvengers(avengers);
    var avengersArr = ['Capitan america', 'Ironman', 'Hulk'];
    var capi = avengersArr[0], ironman = avengersArr[1];
    console.log({ ironman: ironman, capi: capi });
})();
(function () {
    var ironman = {
        name: 'Ironman',
        weapon: 'Armorsuit',
    };
    var capAmerica = {
        name: 'Capitan America',
        weapon: 'Escudo',
    };
    var thor = {
        name: 'Thor',
        weapon: 'Martillo',
    };
    var avengers = [ironman, capAmerica, thor];
    for (var _i = 0, avengers_1 = avengers; _i < avengers_1.length; _i++) {
        var avenger = avengers_1[_i];
        console.log(avenger.name, avenger.weapon);
    }
})();
(function () {
    var a = 'gustavo';
    var nombre = 'gustavo';
    var heroe = {
        a: 1,
        b: 2,
    };
    var getName1 = function () {
    };
    var getName2 = function () {
    };
    function getName3() {
    }
    var getName4 = function () {
        console.log('viejo getName');
    };
})();
//# sourceMappingURL=main.js.map