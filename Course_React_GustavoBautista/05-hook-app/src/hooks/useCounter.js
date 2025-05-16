import { useState } from "react"

//este es una funcion normal
export const useCounter = (initialValue = 10) => {

    const [counter, setCounter] = useState(initialValue)


    return{
        counter: counter


    }
} 