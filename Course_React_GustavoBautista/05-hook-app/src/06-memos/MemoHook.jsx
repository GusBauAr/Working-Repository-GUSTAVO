import { useMemo, useState } from "react";
import { useCounter } from "../hooks/useCounter"

const heavyStuff = (interationNumber = 100) =>{
  for(let i  = 0; i < interationNumber; i++){
    console.log('ahi vamos...........')
  }
  return`${interationNumber} interaciones realizadas`

}


export const MemoHook = () => {

     const {counter, increment} = useCounter(100);

    const [show, setShow] = useState(true)

    //memoriza un valor
    const memorizedValue = useMemo(() => heavyStuff(), [counter])

  return (
    <>
        <h1>Counter: <small>{counter}</small> </h1>

        <hr/>
        <h4>{memorizedValue}</h4>

        <button
            className="btn btn-primary"
            onClick={() => increment()}
        >
            +1

        </button>
        <button className="btn btn-outline-primary" onClick={() => setShow(!show)}>
            Show/hide {JSON.stringify(show)}
        </button>
    </>
  )
}
