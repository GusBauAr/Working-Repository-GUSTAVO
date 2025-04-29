
const a = 10; // a es 10
let b = 10; // b es number

//por que no es igual???
//cuando creamos una constante TypeScript crea ese tipo y ese tipo sabe que (a es 10) por que no se puede cambiar es una constante 
//cuando creamos una variable declarada con let que si se puede cambiar a cualquier tipo de dato por que muestra el nombre (ejm: number. string, boolean,etc....)

//!IMPORTANTE
//!No es recomendable que typeScript infiera en el tipo de dato
//!hata donde sea posile hay que acostumbrarnos a colocar el tipo de dato

const a2: number = 10; // a2 es number
let b2: number = 10; // b2 es number

//? EJEMPLOS:

const a3: number = 10; // a3 es number
let b3: number;// b3 es number
b3 = 32323; // b3 es number

//!IMPORTANTE
//!Si nosotros no colocamos el tipo de dato(:number)nos va salir any ---> significa(Cualquier cosa)

const a4: number = 10; // a3 es number
let b4;// b3 es any
//!cunado es any perdemos control  
b4 = {}; // puede ser un objeto
b4 = [];//puede ser un arrelo
b4 = true;//puede ser un boolean

//..................................................................................

//se activo el tsconfig.json "noImplicitAny": true, para no tener tipos de problemas  
// function sayHello (msg){
//     console.log(msg);

// }

// vamos a a definir que tipo de dato es (msg) y nos muestra los metodos y propiedades
function sayHelloo (msg: string){
    console.log(msg + ' ' + 'Gustavo');
    // msg.  --->>> nos muestra metodos y propiedades, si nostros cambiamso a otro como (number)---> nos muestra metodos y propiedades de number
    
}

//? Ahora si nosotros nos creamos carpetas como (tipos) 
//si nuestras variables declaramos de esta manera, terminan caendo en el objeto global windon puede marcar como un error
        //! const aa: number = 10; 
        //! let bb: string;
// .................................................................
//?lo que vamos a estar haciendo es crear una funcion anonima autoinvocada y no se quiere que nuestros archivos chequen entre si

(( ) => {

    const aa:number = 10;
    console.log(aa);
})()

//?el objetivo de la funcion anonima fue para crear muchos archivos en un proyecto y de esa manera no cae dentro del scout global


