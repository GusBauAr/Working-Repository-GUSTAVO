//que es singleton? --> es una insancia unica de mi clase, no importa si digo new un monton de veces siempre me regrese la misma instancia de mi classe

class Singleton {
    static instancia; // 
    nombre = '';

    constructor(nombre = ''){
        //quiero saber si la instancia tiene un valor (Static instancia ---> null undefined?)
        // console.log(Singleton.instancia); 

        // const a = undefined;
        // console.log(a); //undefined
        // console.log(!a); //true
        // console.log(!!a); //false

        if(!!Singleton.instancia){
            return Singleton.instancia;

        }


        Singleton.instancia = this;
        this.nombre = nombre;

        return this;

    }
}

//creamos una instancia
const instancia1 = new Singleton ('ironman'); // me sale undefined , // cuando ya este inicializada mi clase, no importa si tengo otro (new), debera regresar esa misma instancia
const instancia2 = new Singleton ('spiderman'); // me sale undefined
const instancia3 = new Singleton ('BlackPanther'); 

console.log(`Nombre de la instancia1  es: ${instancia1.nombre}`);
console.log(`Nombre de la instancia2  es: ${instancia2.nombre}`);
console.log(`Nombre de la instancia3  es: ${instancia3.nombre}`);

