let juegos =['zelda', 'mario', 'metroid', 'donkey kong'];
console.log('largo:',juegos.length); //en el length se puede ver el largo del arreglo y todos los que estan en cubo son metodos
                                    //Lo que nos dice length es cuentos elementos hay dentro del arreglo 1,2,3,4.
                                    
let primero=juegos[0]; // obtener el primer elemento , siempre es el 0
// let primero=juegos[2-2]; se puede hacer formas matematicas para obtener el primer elemento e igual va dar 0
let ultimo = juegos[juegos.length-1]; //obtener el ultimo elemento, se resta 1 porque el length empieza en 1 y el arreglo en 0
console.log ({primero, ultimo});







// ahora si necesitamos  barrer cada uno de los elementos del arreglo para ejecutar algun tipo de procedimiento
//existe un metodo muy interezante que se llama forEach, este metodo nos permite barrer cada uno de los elementos del arreglo
juegos.forEach((Elemento, indice, arr)=>{
    console.log({Elemento, indice, arr});
});

//------------------------------------------------------------------------
//ahora si queremos agregar un elemento al final del arreglo
let nuevaLongitud = juegos.push('f-zero'); //agregar un elemento al final del arreglo
//el push sirve para colocar un nuevo elemento al final del arreglo
console.log({nuevaLongitud, juegos}); //el push devuelve la nueva longitud del arreglo

//-----------------------------------------------------------------------
//ahora si yo quiero agregar un elemento al inicio del arreglo
nuevaLongitud = juegos.unshift('fire emblem'); //agregar un elemento al inicio del arreglo
//el unshift sirve para colocar un nuevo elemento al inicio del arreglo
console.log({nuevaLongitud, juegos});

//-------------------------------------------------------------------------
//ahora si yo quiero borrar un juego del final del arreglo
let juegoBorrado = juegos.pop(); //el pop elimina el ultimo elemento del arreglo
console.log({juegoBorrado, juegos});

//---------------------------------------------------------------------------
// si queremos borrar el 2 o el 1 bueno cualquier

let posicion = 1; //la posicion que quiero borrar seria Zelda, 
                  //el 1 es el segundo elemento del arreglo
let juegosBorrados = juegos.splice(posicion, 2); //zelda y mario ,el splice elimina el elemento de la posicion que le digamos
console.log({juegosBorrados, juegos}); //el splice devuelve el arreglo sin el elemento que borramos
//---------------------------------------------------------------------------

// en que lugar se encuentra metroid..???/
let metroidIndex = juegos.indexOf('metroid'); //el indexOf devuelve la posicion del elemento que le digamos
console.log({metroidIndex}); //el indexOf devuelve la posicion del elemento que le digamos
//---------------------------------------------------------------------------

