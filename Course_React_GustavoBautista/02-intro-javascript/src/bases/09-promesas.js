//!promesas en javascript

import { getHeroeById } from "./bases/08-imp-exp";
import heroes from "./data/heroes";

//creaos una constante creamo suna promesa

// las promesas por naturaleza son asincronas primero se va ejecutar todo el codigo que es asincrono
// const promesa = new Promise( (resolve , reject) =>{//este es un callback
//     //el resolve es un callback se va ejecutar cuando la promesa sea exitosa
//     //el reject nosotros vamos a ejecutar cuando la promesa falla y hay que notificarle que no se pudo hacer

//     setTimeout(() => {
//         // console.log('2 segundos despues')
//         // resolve();

//         //!TAREA
//         //Importar el getHeroByid
//         const p1 = getHeroeById(2)
//         // resolve(heroe)
//         resolve(p1);
//         // reject('no se pudo encontrar el heroe')

//     },2000);
// }) ;

// promesa.then((heroe)=>{
//     console.log('heroe', heroe)
// })
// .catch(err => console.warn(err))

//.......................................................................................
const getHeroeByIdAsync = (id)=>{
    return new Promise( (resolve , reject) =>{
        setTimeout(() => {
            
            const p1 = getHeroeById(id);
            if (p1){
                resolve(p1);
            }else{

                reject('No se encontro  el heroe');
            }

            
    
        },2000);
    }) ;
    
}

getHeroeByIdAsync(10)
    
    .then(heroes  => console.log('Heroe', heroes))
    .catch(err => console.warn(err))
    




