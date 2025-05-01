"use strict";
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
//# sourceMappingURL=objects.js.map