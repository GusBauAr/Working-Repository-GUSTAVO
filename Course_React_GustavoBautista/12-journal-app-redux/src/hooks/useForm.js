import { useEffect, useState } from 'react';

export const useForm = ( initialForm = {}, formValidations ={} ) => {
  
    const [ formState, setFormState ] = useState( initialForm );
    const [formValidation, setFormValidation] = useState({})

    useEffect(() => {
        crateValidators();
    
    }, [formState])
    

    const onInputChange = ({ target }) => {
        const { name, value } = target;
        setFormState({
            ...formState,
            [ name ]: value
        });
    }

    const onResetForm = () => {
        setFormState( initialForm );
    }

    //creamos una contane
    const crateValidators = () =>{
        const formCkeckedValues = {};

        for (const formField of Object.keys(formValidations)) {
            const [fn, errorMessage] = formValidations[formField];
            
            //este es un ternario
            formCkeckedValues [`${formField}Valid`] = fn ( formState[formField]) ? null : errorMessage
        }

        setFormValidation(formCkeckedValues);
    }   

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm,

        ...formValidation
    }
}