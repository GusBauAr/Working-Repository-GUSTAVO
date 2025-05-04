// Crear interfaces

// Cree una interfaz para validar el auto (el valor enviado por parametro)

interface Auto{
  encender: boolean;
  velocidadMaxima:number
  acelear(): void; //es una funion que no retorna nada
}
const conducirBatimovil = ( auto:Auto ):void => {
  auto.encender = true;
  auto.velocidadMaxima = 100;
  auto.acelear();
}

const batimovil: Auto = {
  encender:false,
  velocidadMaxima:0,
  acelear(){
    console.log("...... gogogo!!!");
  }
}
//..................................................................................
// Cree una interfaz con que permita utilzar el siguiente objeto
// utilizando propiedades opcionales
interface Villain { //el signo de pregunta (?) eso se llama opcional
  reir?: boolean;
  comer?: boolean;
  llorar?: boolean;
}

const guason:Villain = {
  reir: true,
  comer:true,
  llorar:false
}

const reir = ( guason:Villain ):void => {
  if( guason.reir ){
    console.log("JAJAJAJA");
  }
}

//................................................................................
// Cree una interfaz para la siguiente funcion

interface CityFunction {
  //necesitamos recibir un arreglo de ciudadanos
  (ciudadanos:string[]):number

}

const ciudadGotica: CityFunction = ( ciudadanos:string[] ):number => {
  return ciudadanos.length;
}
//.................................................................................

// Cree una interfaz que obligue crear una clase
// con las siguientes propiedades y metodos

interface PersonaInterface{
  nombre:string;
  edad:number;
  sexo:string;
  estadoCivil:boolean;
  imprimirBio (): void;
}
/*
  propiedades:
    - nombre
    - edad
    - sexo
    - estadoCivil
    - imprimirBio(): void // en consola una breve descripcion.
*/
class Persona implements PersonaInterface {
  public nombre: string
  public edad:number
  public sexo:string
  public estadoCivil:boolean

  //es una funcion que no regresa nada
  imprimirBio (){
    console.log('hola mundo de GUSTAVO');
  };
}