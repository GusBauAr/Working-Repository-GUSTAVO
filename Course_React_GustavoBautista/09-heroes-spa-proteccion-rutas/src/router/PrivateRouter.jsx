import { useContext } from "react"
import { AuthContext } from "../auth/context/AuthContext"
import { Navigate, useLocation } from "react-router-dom";


export const PrivateRouter = ({children}) => {
     
    //functional component
    const {logged} = useContext( AuthContext);

    const {pathname, search} = useLocation();

    const lastPath = pathname + search;
    localStorage.setItem('lastPath', lastPath)

  return (logged)
  ? children
  :<Navigate to='/login'/>
}
