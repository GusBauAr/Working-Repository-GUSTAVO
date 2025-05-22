
//este es el componente que sirve para proveer la informacion a toda mi aplicacion 

import { useReducer } from "react";
import { AuthContext } from "./AuthContext";
import { authReducer } from "./AuthReducer";

const initialState = {
    logged:false,

}

export const AuthProvider = ({children}) => {
    //[ state, dispatch] desestructuracion de un arreglo
    const [ authState, dispatch] = useReducer(authReducer, initialState);


  return (
   <AuthContext.Provider value={{}}>
    {children}
   </AuthContext.Provider>
  );
}
