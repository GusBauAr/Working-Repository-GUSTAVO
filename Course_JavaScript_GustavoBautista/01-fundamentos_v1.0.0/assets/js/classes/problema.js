


const fher ={ //objeto
    nombre:'Fernando',
    edad: 30,
    imprimir(){
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`)
    }
}
//nuevo objeto

const pedro ={ //variable
    nombre:'Pedro', //propiedades
    edad: 15
}
// fher.imprimir();

//ok esto se debe  de crear con la palabra (new)
function Persona (nombre, edad){ // funcion 
    console.log('se ejecuto esta linea');
    this.nombre = nombre; //el this esta haciendo referencia al objeto, en este caso esta haciendo referencia esta funcion y le esta asignando esta propiedad (this.nombre)
    this.edad = edad;
    this.imprimir = function(){
        console.log(`Nombre: ${this.nombre} - edad: ${this.edad}`)
    }

}

const maria = new Persona('Maria', 18); //nueva instancia de persona, maria es una objeto que tiene el tipo Persona
const melissa = new Persona('Melissa', 35); //nueva instancia de persona, maria es una objeto que tiene el tipo Persona
// console.log (maria);
maria.imprimir();
melissa.imprimir();