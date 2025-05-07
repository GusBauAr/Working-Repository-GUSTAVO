//Import, export y funciones comunes de arreglos

import heroes,{owners} from "../data/heroes";

// console.log(owners)
// import { heroes } from './data/heroes' //para que se importe (heroes) en el archivo  heroes hay que clocar (export const heroes = [)
// import {heroes} from './data/heroes'//para poder importar se usa el snniper (imp) que se cerar automaticament
// import { heroes } from "./data/heroes";/este es con enter o tab

//tambien para que se importe escribimos la palabra (heroes) el nombre de la contante de la otra carpeta y automaticamente se crea un importacion
//?se apreta enter o tab
//!.............................................................................
//!CREAMOS UNA FUNCION 

// const  getHeroeById = (id) =>{
//     return heroes.find((heroe) => {
//         if (heroe.id === id){
//             return true;
//         }else{
//             return false;
//         }
//     });

// }
// console.log(getHeroeById(2) );//llamamos al id del heroe 2
//!/......................................................................
//!VAMOS A SIMPLIFIXAR EL CODIGO
export const  getHeroeById = (id) => heroes.find((heroe) => heroe.id === id);
// console.log(getHeroeById(2) );//llamamos al id del heroe 2

//!........................................................................
//!AHORA VAMOS HACER OTRA FUNCION 

//usamos filter para extraer todos que son de DC y si colocaos 'MARVEL'en el ---->console.log(getHeroesByOwner('Marvel')); ----> nos va mostrar un filtro de todos los marvels
export const getHeroesByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner);

// console.log(getHeroesByOwner('DC'));




