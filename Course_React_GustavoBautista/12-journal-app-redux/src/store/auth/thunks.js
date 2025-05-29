import { registerUserWithEmailPassword, singInWithGoogle } from "../../firebase/providers";
import { checkingCredentials, login, logout } from "./authSlice"

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
        
        if( !result.ok) return dispatch(logout(result.errorMessage))

            dispatch(login(result))
    }
}


//creamos un nuevo thunks
export const startCreatingUserWithEmailPassword = (email, password, displayName) =>{
    return async(dispatch) =>{

        //tarea sincrona
        dispatch(checkingCredentials());

        //tarea asincrona
        const resp =  await registerUserWithEmailPassword(email, password, displayName);
        console.log(resp)

    }

}