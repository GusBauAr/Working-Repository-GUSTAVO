import { heroes } from '../data/heroes';

/**
 * 
 * @param {HTMLDivElement} element 
 */

export const asyncComponent = (element) => {

    const id1 = '5d86371f2343e37870b91ef1';
    findHero(id1) //const findHero: (id: string)----> es una funcion que tiene un argumento id de tipo string  => ----> y retorna Promise<string> -----> una promesa que resuelve un string
        .then( name => element.innerHTML = name)
        .catch( error => element.innerHTML = error)
}

//creamos una funcion
/**
 * 
 * @param {String} id 
 * @returns {Promise<String>}
 */
//todo: el async ---> cambia radicalmente como funciona mi funcion y si vemos en la consola se combiente en una promesa
//todo: el async transforma mi funcion, en lugar de regresar un objeto, va a regresar una promesa  que resuleve lo que tenga en el (return) --> return hero
const findHero = async (id) => {

    const hero = heroes.find( hero => hero.id === id);

    return hero.name;
}