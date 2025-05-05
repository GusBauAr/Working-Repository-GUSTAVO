//importamos axios
import axios from 'axios'
import { Pokemon } from '../interfaces/pokemon';

//creamo suna funcion
export const getPokemon = async(pokemonId: number):Promise<Pokemon> => {  //el async tranforma  mi funcion a que regrese una promesa------>const getPokemon: () => Promise<number>------> si nosotros cambiamos en el return por un string, un boolen  o un array va cambiar la promesa de tipo string, boolean o number
    // console.log('hola gus');
    // if (true) throw new Error('Auxilioooo')
    // return 1;
                //el await es espera a que esta promesa (axios.get) se rsuelva y luego continue ejecutando el programa
    const {data} = await axios.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)


    return data;

    
}

//!IMPORTANTE:
//?estamos haciendo la peticion htpp y luego lo estamos trabajando con una promesa
