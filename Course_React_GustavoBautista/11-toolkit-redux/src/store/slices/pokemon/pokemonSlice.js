import { createSlice } from '@reduxjs/toolkit';

export const pokemonSlice = createSlice({
    name: 'pokemon',
    initialState: {
        page:0,
        pokemons:[],
        isLoading:false,
    },
    reducers: {
       startLoadingPokemons:(state, )=>{
        state.isLoading = true;
       },
       setPokemons:(state, action) => {
        //este esel payload de mi accion
        state.isLoading = false; //ta tenemos el pokemon y qqu deje de cargar
        state.page = action.payload.page;
        state.pokemons =action.payload.pokemons
       }
    }
});
// Action creators are generated for each case reducer function
//estas son nuestras acciones
export const { startLoadingPokemons, setPokemons } = pokemonSlice.actions;