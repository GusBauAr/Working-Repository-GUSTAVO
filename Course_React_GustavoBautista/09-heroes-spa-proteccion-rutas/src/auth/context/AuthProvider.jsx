
//este es el componente que sirve para proveer la informacion a toda mi aplicacion 

import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./AuthReducer";
import { types } from "../types/types";

const initialState = {
    logged:false,

}

export const AuthProvider = ({children}) => {
    //[ state, dispatch] desestructuracion de un arreglo
    const [ authState, dispatch] = useReducer(authReducer, initialState);

    //creamo suna funcion
    const login = (name = '') =>{
      const  action = {
        type: types.login,
        payload:{
          id:'ABC',
          name:name
        }
      }

      dispatch(action)
    }


  return (
   <AuthContext.Provider value={{
    ...authState,
    login: login
   }}>
    {children}
   </AuthContext.Provider>
  );
}
