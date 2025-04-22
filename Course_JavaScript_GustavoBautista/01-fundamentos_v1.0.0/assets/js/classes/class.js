

//el objetivo de clases es que podamos tener propiedades y metodos que sean comunes en todas las instancias de esta misma persona
class Persona {

    // se esta inicializando propiedades de clases
    nombre = '';
    codigo = '';
    frase = '';

    constructor (nombre = 'sin nombre', codigo = 'sin codigo', frase = 'sin frase'){//el constructor es un metodo que se va ejecutar exactamente en el momento que se crea una nueva instancia de Persona
                    //el contructor es el unico metodo que retorna una instancia de un objeto y no retorna underfined
        this.nombre = nombre;        
        this.codigo = codigo;
        this.frase = frase;
    }
    //..................................................................................................
    //el metodo siempre se acostumbra que este despues del contructor
    //creamos un metodo si esta vacio el () quiere decir que no tiene argumentos y saldra undefined
    quienSoy(){
        console.log(`Soy ${this.nombre} y mi identidad es ${this.codigo}`);

    } //.....................................................................................................
    
    //este es otro metodo
    miFrase(){
        //podemosllamar los metodos dentor de una clase, o sea dentro de otros metodos en este caso metodo (quienSoy)
        this.quienSoy();
        console.log(`${this.codigo} dice: ${this.frase}`);
    }
    //................................................................

    
}

//crear una nueva instancia de esta clase
const spiderman = new Persona('Peter Parker', 'Spider', 'soy tu amigo spiderman');
const ironman = new Persona('Tony Stark', 'ironman', 'yo soy ironman');
console.log(spiderman);
console.log(ironman);
//............................................
//este es parte del metodo
spiderman.quienSoy();
ironman.quienSoy();
//..........................................
spiderman.miFrase();
ironman.miFrase();