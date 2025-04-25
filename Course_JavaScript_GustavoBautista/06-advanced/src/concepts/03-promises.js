import { heroes } from '../data/heroes';

/**
 * 
 * @param {HTMLDivElement} element 
 */

export const promiseComponent = (element) => {
//las promesas es un pacto entre 2 partes, una se comprometo haciendo el trabjo y el otro esta esperando el cumplimiento de la promesa, pero puede ser que la promesa se rompa
    
    const renderHero = (hero) => {
        element.innerHTML = hero.name; // se rendiriza el hero.name
    }

    const renderTwoHeroes = (hero1, hero2) => {
        element.innerHTML = `
            <h3>${hero1.name}</h3>
            <h3>${hero2.name}</h3>
        `;
    }

    const renderError = (error) => {
        element.innerHTML = `
            <h1>Error:</h1>
            <h3>${ error }</h3>
        `
    }

    const id1 = '5d86371fd55e2e2a30fe1cc3';
    const id2 = '5d86371f25a058e5b1c8a65e';


    findHero( id1 )
        .then((hero1) =>{ //esto es un callback

            findHero( id2 )
                .then ( hero2 => {
                    renderTwoHeroes(hero1, hero2)
            })
            .catch (renderError);
        })
        .catch (renderError);



}
/**
 * 
 * @param {String} id 
 * @returns {Promise}
 */
const findHero = ( id ) => {
    //el concepto de las promesas, no es mas que un objeto especial que tiene javascript, se pueden crear de muchas maneras
    //una forma bien comun es:
    return new Promise( (resolve, reject) => {
    //el (resolve) es una funcion que va a tener el valor producto de mi promesa, en este caso el hero.id que lo encontramos
    //el (reject) es que fallamos con la promesa, no logramos resolver la promesa exitosamente    
    
        const hero = heroes.find( hero => hero.id === id);

        if (hero){
            resolve(hero);
            return;
        }

        reject(`Hero with id ${ id } not found`);
    });
}