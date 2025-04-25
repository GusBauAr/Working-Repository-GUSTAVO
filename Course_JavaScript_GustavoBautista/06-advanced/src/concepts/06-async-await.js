import { heroes } from '../data/heroes';

/**
 * 
 * @param {HTMLDivElement} element 
 */

export const asyncAwaitComponent = async (element) => { //ahora el asyncAwaitCompoinent lo estamos volviendo una funcion asincrona (async)

    const id1 = '5d86371f25a058e5b1c8a65e';
    const id2 = '5d86371f233c9f2425f16916';

    const hero1 = await findHero (id1)
    const hero2 = await findHero (id2)

    element.innerHTML = `${hero1.name} / ${hero2.name}`;
    
}
//todo: el AWAIT siempre tiene que estar en funciones asincrona (ASYNC) no puede estar en una funcion que no es asincrona
//creamos una funcion

const findHero = async(id) =>{
    
    const hero = heroes.find (hero => hero.id === id);
    if (!hero)
        throw `Hero not found`;
    return hero;

}