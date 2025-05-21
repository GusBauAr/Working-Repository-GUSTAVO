import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {
  //si queremos tomar el objeto de user

  const { user, setUser } = useContext(UserContext);
  
  return (
    <>
      <h1>LoginPage</h1>
      <hr />

      <pre>
        {JSON.stringify(user, null, 3)}
      </pre>

      <button className='btn btn-primary' onClick={() => setUser({id:123, name:'gustavo bautista arce', email:'gustavopgb21@gmail.com'})}>
          estabalecer usuario
        </button>


    </>
  );
};
