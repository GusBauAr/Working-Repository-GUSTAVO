"use strict";
(function () {
    //en typescript existe una palabra recerbada llamda (type) y esa palabra es para definir un tipo
    //ahora podemos borrar todo lo que esta dentro {name: string, age?:number, powers:string[], getName?: () => string} 
    var flash = {
        name: 'Gustavo Bautista',
        age: 24,
        powers: ['super velocidad', 'viajar en el tiempo']
        //si cambiamos a number:-----> powers:(number[])
        // powers:[1,2],
    };
    //lo mismo se hace con superman lo borramos {name: string, age?:number, powers:string[], getName?: () => string}
    var superman = {
        name: 'Clark Kent',
        age: 60,
        powers: ['super velocidad'],
        //si cambiamos a number:-----> powers:(number[])
        // powers:[1],
        getName: function () {
            return this.name;
        }
    };
})();
