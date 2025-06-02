import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup, updateProfile } from "firebase/auth";
import { FirebaseAuth } from "./config";


//esta es una instancia
const googleProvider = new GoogleAuthProvider();

export const singInWithGoogle = async()=>{
    try {
        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        // const  credentials = GoogleAuthProvider.credentialFromResult(result);
        const {displayName, email, photoURL, uid} = result.user;
        
        return{
            ok:true,
            //user info
            displayName, email, photoURL, uid
        }

    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;

        return{    
            ok: false,
            errorMessage,
            errorCode,
        }
    }
}


//nuevo proveedor

export const registerUserWithEmailPassword = async({email, password, displayName}) => {
    try {
        const resp = await createUserWithEmailAndPassword (FirebaseAuth, email, password);
        const {uid, photoURL} = resp.user;
        //todo: actualizar el displayName en firebase
        // /tarea asincrona
        await updateProfile(FirebaseAuth.currentUser,{ displayName});
        return{
            ok:true,
            uid, photoURL, email, displayName
        }
        
    } catch (error) {
        console.log(error)
        return {ok: false, errorMessage: error.message}
    }
}



export const loginWithEmailPassword = async({email, password}) =>{
    console.log(email, password)
    try {
        const resp = await signInWithEmailAndPassword(FirebaseAuth, email, password);
        const {uid, photoURL, displayName} = resp.user;

        return{
            ok: true,
            uid, 
            photoURL, 
            displayName, 
            email,
        };

    } catch (error) {
        return {ok: false, errorMessage: error.message};
    }

    //!la funcion que vamos a llamar de firebase es signInWithEmailPassword

}

export const logoutFirebase = async() =>{
    return await FirebaseAuth.signOut();
}