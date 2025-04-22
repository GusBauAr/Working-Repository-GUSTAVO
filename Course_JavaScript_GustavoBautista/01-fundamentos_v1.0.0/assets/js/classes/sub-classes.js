class Persona {

    //ejercicio:Cuantas instancias de mi clase se han inicializado (static _conteo = 0)
    static _conteo = 0;
    static get conteo(){
        return Persona._conteo + 'instancias';
    }

    static mensaje(){
        console.log(this.nombre); //undefined
        console.log('hola a todos  soy un metodo estatico');
    }


    //  se esta inicializando propiedades de clases
    nombre = '';
    codigo = '';
    frase = '';
    comida = '';


    constructor (nombre = 'sin nombre', codigo = 'sin codigo', frase = 'sin frase'){//el constructor es un metodo que se va ejecutar exactamente en el momento que se crea una nueva instancia de Persona
                    //el contructor es el unico metodo que retorna una instancia de un objeto y no retorna underfined
        this.nombre = nombre;        
        this.codigo = codigo;
        this.frase = frase;

        Persona._conteo++;
    }
    // controlar una propiedad, ejm: comida siempre tiende que estar en mayuscula
    //EL SET ES PARA ESTABLECER UN VALOR
    set setComidaFavorita(comida){//argunemnto (comida)
        this.comida = comida.toUpperCase(); //para que salga en mayuscula todo lo que se establece con comida.
    }
    //EL GET ES PARA RECUPERAR UN VALOR
    get getComidaFavorita(){ //vamos a recuperar una propiedad 
        return `la comida favorita de ${this.nombre} es ${this.comida}`;

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
//en lugar de escribir codigo como nombre, codigo, frase, etc.... vamos a extender heroe con la palabra recerbada extends y extenderlo de la clase Person
class Heroe extends Persona{
    clan = 'sin clan';

    //constructor del Heroe
    constructor(nombre, codigo, frase){
        super(nombre, codigo, frase);//hace referencia a la clase Persona, es como si llamara 

        this.clan = 'Avengers';
    }
    quienSoy(){
        console.log(`Soy ${this.nombre}, ${this.clan}`);
        super.quienSoy(); //llama el metodo quiensoy para no estar transcribiendo de nuevo de la clase Padre
    }
}
//crear una nueva instancia de esta clase
const spiderman = new Heroe('Peter Parker', 'Spider', 'soy tu amigo spiderman');
// const spiderman = new Heroe();
console.log(spiderman);
spiderman.quienSoy();


