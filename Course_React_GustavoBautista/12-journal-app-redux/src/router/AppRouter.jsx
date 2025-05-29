import { Navigate, Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { JournalRoutes } from "../journal/routes/JournalRoutes"

import { CheckingAuth } from "../ui/components/CheckingAuth";

import { FirebaseAuth } from "../firebase/config";

import { useCheckAuth } from "../hooks";

//se hizo un custom hook de aqui para useCheckAuth
export const AppRouter = () => {

  
  const status = useCheckAuth();
  

    if (status === 'checking'){
      return <CheckingAuth/>
    }

  return (
    <Routes>

        {
          (status === 'authenticated')
          ? <Route path="/*" element={<JournalRoutes/>}/>
          : <Route path="/auth/*" element={<AuthRoutes/>}/>
        }

        <Route path='/*' element={<Navigate to='/auth/login/>'/> } />

        {/* login y registro */}
        {/* <Route path="/auth/*" element={<AuthRoutes/>}/> */}
        {/* journalApp */}
        {/* <Route path="/*" element={<JournalRoutes/>}/> */}

        <Route/>
    </Routes>
  )
}
