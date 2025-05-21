import { createContext } from "react";

//este es un react component
export const UserContext = createContext();

//nos permite saber como luce nuestar informacion que vamos a colocar ahi 
//para que nuestro hook de react busque el contexto ----> UseContext y para definir el proveedor que es el UserProvider