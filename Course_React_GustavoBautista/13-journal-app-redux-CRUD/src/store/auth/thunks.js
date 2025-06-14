import { loginWithEmailPassword, logoutFirebase, registerUserWithEmailPassword, singInWithGoogle } from "../../firebase/providers";
import { clearNotesLogout } from "../journal/journalSlice";
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
        const {ok, uid, photoURL, errorMessage} =  await registerUserWithEmailPassword(email, password, displayName);
            if(!ok) return dispatch(logout({errorMessage}));

            dispatch(login({uid, displayName, email, photoURL}));

    }

}



export const startLoginWithEmailPassword = ({email, password}) => {
    return async(dispatch) => {
        dispatch(checkingCredentials());
        
        const result = await loginWithEmailPassword({email, password});
        if (!result.ok) return dispatch(logout( result));

        dispatch(login(result));

    }
}


export const startLogout = () =>{
    return async(dispatch) =>{
        await logoutFirebase();
        dispatch(clearNotesLogout());

        dispatch(logout({}));

    }
}