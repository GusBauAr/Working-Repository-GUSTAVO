import { useState } from "react";


export const useForm = (initialForm = {}) => {

    const [formState, setFormState] = useState(initialForm);
    
      
    
      const onInputChange = ({ target }) => {
        const { name, value } = target;
        //este es un objeto
        setFormState({
          ...formState,
          [name]: value,
        });
      };

    //retornamos un objeto
    return {
        ...formState,
        formState,
        onInputChange,

    }
}
