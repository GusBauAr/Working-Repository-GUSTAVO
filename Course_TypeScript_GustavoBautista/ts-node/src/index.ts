                    // el (as) es un alias donde puedes colocar un nombre diferente para que no haya conflictos 
// import { Hero as superHero, Hero2, Hero } from './classes/Hero'; //las llaves ---> {} significa una desestructuracion de la carpeta from "./classes/Hero";

import * as HeroClass from "./classes/Hero";  //esta importacion es distinta, esta es una importacion general de todas las classes que puede tener dentro del archivo Hero
import powers from "./data/powers"; //export normal


// import Powers from "./data/powers";//exportacion por defecto

//la idea del proyecto es que nos ayude a nosotros  a comprender  como podemos seguir trabajndo en typeScript pero ya ahora manejando modulos y usando importancionesy otro monton de cracteristicas que gracias al manejador de modulos lo tenemos 

const Hero = 123


//para instanciar mi clase seria
// const ironman = new superHero('Ironman',1, 55 );

const ironman = new HeroClass.Hero('Ironman',1, 55 ); //----->> este seria si utilizamos nuestras exportaciones con alias

console.log(ironman);

//para saber los poderes de los heroes hay qye colocar un console.log

// console.log(Powers)// exporaciones por defecto

console.log(powers);





