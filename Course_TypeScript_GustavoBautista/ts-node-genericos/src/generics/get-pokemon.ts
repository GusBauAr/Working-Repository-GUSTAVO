//importamos axios
import axios from 'axios'

//creamo suna funcion
export const getPokemon = async(pokemonId: number) => {  //el async tranforma  mi funcion a que regrese una promesa------>const getPokemon: () => Promise<number>------> si nosotros cambiamos en el return por un string, un boolen  o un array va cambiar la promesa de tipo string, boolean o number
    // console.log('hola gus');
    // if (true) throw new Error('Auxilioooo')
    // return 1;
                //el await es espera a que esta promesa (axios.get) se rsuelva y luego continue ejecutando el programa
    const resp = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`)
    console.log(resp);

    return 1;
}

//!IMPORTANTE:
//?estamos haciendo la peticion htpp y luego lo estamos trabajando con una promesa
