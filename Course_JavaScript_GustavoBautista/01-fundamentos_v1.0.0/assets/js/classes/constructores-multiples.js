//sobre craga de constructores


class Persona{

    //creamos un metodo estatico
    static porObjeto ({nombre, apellido, pais}){
        return new Persona(nombre, apellido, pais);

    }



    constructor ( nombre, apellido, pais){
        this.nombre = nombre;
        this.apellido = apellido;
        this.pais = pais;
    }
    //creamos un metodo
    getInfo(){
        console.log(`info: ${this.nombre}, ${this.apellido}, ${this.pais}`);

    }

}
//tenemos muchos variable

const nombre1 = 'Melissa',
      apellido1 = 'Flores',
      pais1 = 'Honduras';

const fher = {
    nombre: 'Gustavo',
    apellido: 'Bautista',
    pais: 'Bolivia'
}


const persona1 = new Persona (nombre1, apellido1, pais1); //new es para contructor
const persona2 = Persona.porObjeto(fher);
persona1.getInfo();
persona2.getInfo();




