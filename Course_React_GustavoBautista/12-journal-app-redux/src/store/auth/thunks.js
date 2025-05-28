import { singInWithGoogle } from "../../firebase/providers";
import { checkingCredentials } from "./authSlice"

//creamos una funcion
export const checkingAuthentication = (email, password)=>{
    return async (dispatch) =>{

        // hacer un dispatch de una accion
        dispatch( checkingCredentials());

    }
}

export const startGoogleSignIn = () =>{
    return async (dispatch) => {
        dispatch( checkingCredentials());

        const result = await singInWithGoogle()
        console.log({result})
    }
}