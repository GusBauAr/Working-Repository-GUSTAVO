
import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'auth',
    initialState: {
        status:'checking', //checking, 'not-authenticated', 'authenticated'//estados que vamos a definir
        uid: null,
        email:null,
        displayName:null,
        photoURL:null,
        errorMessage:null,
    },
    reducers: {
        //lo definimos
        login:(state, {payload})=>{
            state.status='authenticated', //checking, 'not-authenticated', 'authenticated'//estados que vamos a definir
            state.uid= payload.uid;
            state.email=payload.email;
            state.displayName=payload.displayName;
            state.photoURL=payload.photoURL;
            state.errorMessage= null;
        },
        logout:(state, {payload}) =>{
            state.status='not-authenticated', //checking, 'not-authenticated', 'authenticated'//estados que vamos a definir
            state.uid= null;
            state.email=null;
            state.displayName=null;
            state.photoURL=null;
            state.errorMessage=payload?.errorMessage;
        },
        checkingCredentials:(state) =>{ 
            state.status = 'checking';

        }
    }
});
// Action creators are generated for each case reducer function// estas son nuestras funciones
export const { login, logout, checkingCredentials } = authSlice.actions;