import { useEffect, useState } from "react";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "gustavo",
    email: "gustavopgb21@gmail.com",
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    //este es un objeto
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  //useEffect---> sirve para disparar efectos secundarios
  //como cualquier hook es una funcion, esto recibe una funcion como argumento
  useEffect(() => {
    console.log('useEffect called');
  });



  return (
    <>
      <h1> Formulario Simple</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />

      <input
        type="email"
        className="form-control mt-2"
        placeholder="gustavo@gmail.com"
        name="email"
        value={email}
        onInput={onInputChange}
      />
    </>
  );
};
