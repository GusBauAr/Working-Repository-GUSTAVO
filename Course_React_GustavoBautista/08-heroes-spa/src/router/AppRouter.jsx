import { Navigate, Route, Routes } from "react-router-dom"
import { MarvelPage } from "../heroes/pages/MarvelPage"
import { DcPage } from "../heroes/pages/DcPage"
import { LoginPage } from "../auth/pages/LoginPage"

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="/marvel" element={<MarvelPage/>}/>
            <Route path="/Dc" element={<DcPage/>}/>
            <Route path="/login" element={<LoginPage/>}/>

            //comodin para cuando no haya ninguna referencia de una pagina
            <Route path="/*" element={<Navigate to="/marvel"/>}/>


            

        </Routes>

    </>
  )
}
