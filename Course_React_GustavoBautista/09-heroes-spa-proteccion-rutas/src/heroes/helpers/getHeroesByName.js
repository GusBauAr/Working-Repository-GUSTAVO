import { heroes } from "../data/heroes";


//hacer un filtrado
export const getHeroesByName = (name='') =>{
    
    name = name.toLocaleLowerCase().trim();

    if(name.length === 0 ) return [];

    //filtrar los arreglos de heroes
    return heroes.filter(
        hero => hero.superhero.toLocaleLowerCase().includes( name)
    );
}