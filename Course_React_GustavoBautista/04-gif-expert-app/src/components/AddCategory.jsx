import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState("");

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (inputValue.trim().length <= 1) return;
    // setCategories( categories =>[inputValue, ... categories])

    //Emitimos el evento
    onNewCategory(inputValue.trim()); //se va a emitir el onNewCategory si el valor es mayor a 1 caracter se emite el onNewCategory
    ///limpiamos el input
    setInputValue("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar gift"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  );
};
