import { useState } from "react"
import { UserContext } from "./UserContext"

// const user = {
//     id:123,
//     name:'Gustavo Bautista Arce',
//     email:'gustavopgb21@gmail.com'
// }


export const UserProvider = ( { children }) => {

    const [user, setUser] = useState()
   
  return (
    
    // <UserContext.Provider value={{ hola: 'Mundo', user: user}}> 
    <UserContext.Provider value={{ user, setUser }}> 
        {children}
    </UserContext.Provider>
  )
}
 //<UserContext.Provider value={{ hola: 'Mundo', user: user}}> -----> quiero proveer toda la informacion que este userContext va a proporcionarle al arbol de nuestros componentes


//value={{ hola: 'Mundo'}}
//esto es de que cualquier hijo del UserProvider va a poder obtener  de este UserContext
//estamos creado un objeto que tiene la propiedad mundo 