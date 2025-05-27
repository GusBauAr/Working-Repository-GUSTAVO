import { pokemonApi } from "../../../api/pokemonApi"
import { setPokemons, startLoadingPokemons } from "./pokemonSlice"


export const getPokemons = (page = 0) => {

    return async  (dispatch, getState) =>{
        dispatch(startLoadingPokemons())

        //todo: realizar peticion http
        
        //!envez de manejar todo este codigo del fetch usamos el  "pokemonApi"
        const {data} = await pokemonApi.get(`/pokemon?limit=10&offset=${ page * 10 }`)
        console.log(data)
        // const resp =  await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${ page * 10 }`);
        // const data =  await resp.json();


        // console.log(data);


        //data-pokemons

        dispatch(setPokemons({pokemons: data.results, page: page + 1}))
    }
}