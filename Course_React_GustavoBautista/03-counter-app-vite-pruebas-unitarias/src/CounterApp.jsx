import {useState} from 'react'; //useState - Hook
import PropTypes from 'prop-types';
import React from 'react'



export const CounterApp = ({ value }) => {
    //nuestro primer hooks

    const [ counter, sentCounter ] = useState( value )
    
    const handleAdd  = () =>{
        // console.log(event)
        sentCounter( counter + 1);
    }
    const menos =() =>{
        sentCounter(counter - 1);
    }
    const reset = ()=>{
        sentCounter(value)
    }


  return (
    <>
        <h1>CounterApp</h1>
        <h2> { counter } </h2>

        <button onClick={handleAdd}>+1</button>
        <button onClick={menos}> -1</button>
        <button onClick={reset}> Reset</button>
    </>
    
  )
}

CounterApp.protoTypes ={
    value: PropTypes.number.isRequired
}
