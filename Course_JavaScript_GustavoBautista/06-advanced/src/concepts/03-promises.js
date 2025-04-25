import { heroes } from '../data/heroes';

/**
 * 
 * @param {HTMLDivElement} element 
 */

export const promiseComponent = (element) => {
//las promesas es un pacto entre 2 partes, una se comprometo haciendo el trabjo y el otro esta esperando el cumplimiento de la promesa, pero puede ser que la promesa se rompa
    console.log('promiseComponent');


}
/**
 * 
 * @param {String} id 
 * @returns {Promise}
 */
const findHero = (id) => {
    //el concepto de las promesas, no es mas que un objeto especial que tiene javascript, se pueden crear de muchas maneras
    //una forma bien comun es:
    return new promise( (resolve, reject) => {
    //el (resolve) es una funcion que va a tener el valor producto de mi promesa, en este caso el hero.id que lo encontramos
    //el (reject) es que fallamos con la promesa, no logramos resolver la promesa exitosamente    
    
        const hero = heroes.find(hero => hero.id === id);

        if (hero){
            resolve(hero);
            return;
        }

        reject(`Hero with id ${ id } not found`);
    });

}