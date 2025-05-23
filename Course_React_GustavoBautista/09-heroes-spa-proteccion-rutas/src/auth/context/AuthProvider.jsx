
//este es el componente que sirve para proveer la informacion a toda mi aplicacion 

import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./AuthReducer";
import { types } from "../types/types";

const initialState = {
    logged:false,

}

const init = () => {
  const user = JSON.parse (localStorage.getItem('user'));

  return{
    logged: !!user,
    user:user,
  }
}


export const AuthProvider = ({children}) => {
    //[ state, dispatch] desestructuracion de un arreglo
    const [ authState, dispatch] = useReducer(authReducer, initialState, init);

    //creamo suna funcion
    const login = (name = '') =>{

      const user  = {id:'ABC', name}

      const  action = {
        type: types.login,
        payload:user,
      }

      localStorage.setItem('user', JSON.stringify( user));

      dispatch(action)
    }

    const logout = () =>{
      localStorage.removeItem('user');
      const  action = {type: types.logout}
      dispatch(action);
    }


  return (
   <AuthContext.Provider value={{
    ...authState,

    //metodos
    login: login,
    logout: logout,
   }}>
    {children}
   </AuthContext.Provider>
  );
}
