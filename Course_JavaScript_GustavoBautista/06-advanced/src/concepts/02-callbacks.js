import { heroes } from "../data/heroes";

//todo: que es un callback?
//es una funcion que recibe un argumento y ese argumento es una funcion que invocan dentro de su funcion 
/**
 * 
 * @param {HTMLDivElement} element 
 */

export const callbacksComponent = (element) => {


    const id = '5d86371f2343e37870b91ef1';
    findHero(id, (error, hero) => { // se va mandar el id como argumento
        // element.innerHTML = hero?.name || 'No hay heroe';

        if (error){
            element.innerHTML = error;
            return;
        }
        element.innerHTML = hero.name;
    }); 
    //el valor de esa variable es esta funcion en cual cae en el callback de abajo



}
/**
 * 
 * @param {String} id 
 * @param {(error: String|null, hero: Object)=> void} callback 
 */
const findHero = (id, callback) => {// se va recibi el id y el callback
    const hero = heroes.find( hero => hero.id === id); //se puede tener un trabajo asincrono

    if (!hero){
        callback(`Hero with id ${id} not found`);
        return; // regresa undefined
    }

    callback( null, hero); // se esta llamando el callback con el argumento de hero

}