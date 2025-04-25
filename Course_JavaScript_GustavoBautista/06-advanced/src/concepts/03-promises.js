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

    //PROMISE.ALL---->nos permite ejecutar todas las funciones o todas las promesas que definamos en unarreglo de promesas

    const id1 = '5d86371fd55e2e2a30fe1cc3';
    const id2 = '5d86371f25a058e5b1c8a65e';

    //se esta ejecutando a solicitar hambas promesas de manera simultanea
    Promise.all([
        findHero(id1),
        findHero(id2),
    ])
    //el then se ejecuta cuando todas las promesas se cumplen correctamente
    .then(([hero1, hero2]) => renderTwoHeroes(hero1, hero2)) 
    .catch (renderError);

    //!FORMA 2 REFACTORIZAR
    // let hero1;

    // findHero (id1)
    //     .then( hero => {
    //         hero1 = hero;
    //         return findHero(id2);
    //     }).then( hero2 => {
    //         renderTwoHeroes(hero1, hero2); 
    //     })
    //     .catch (renderError);


    //!FORMA 1
    // findHero( id1 )
    //     .then((hero1) =>{ //esto es un callback

    //         findHero( id2 )
    //             .then ( hero2 => {
    //                 renderTwoHeroes(hero1, hero2)
    //         })
    //         .catch (renderError);
    //     })
    //     .catch (renderError);



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