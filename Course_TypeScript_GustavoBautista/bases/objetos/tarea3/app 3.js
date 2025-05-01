"use strict";
// Objetos
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
// Mystique, debe poder ser cualquiera de esos dos mutantes (charles o apocalipsis)
var mystique;
mystique = charles;
mystique = apocalipsis;
console.log('estoy aqui');
//...........................................................
//!ES POSIBLE DEPURAR EL CODIGO TYPESCRIPT..????
//? dar referencia ejecutamos y nos aparece en consola el .js en vez el .ts, nos muestra la linea de codigo de lo que se ejecuta que numero de linea esta, pero cuando queremos ir al typescript no es la linea.
//?es por que nuestro navegador y todos los navegadores ejecutan JavaScript
//? TyprScript esta siendo transpilado a javascript
//?y se realiza una pequeña configuracion en el tsconfig.json
//?buscamos que diga con el nombre ("sourceMap:true")
//?ya cuando esta todo listo ejecutamos en la terminal tsc -w para ejecutar todo el codigo y vamos a tener 3er archivo (.map)
//# sourceMappingURL=app%203.js.map