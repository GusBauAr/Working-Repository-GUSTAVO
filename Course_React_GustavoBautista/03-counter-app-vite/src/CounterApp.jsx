
import PropTypes from 'prop-types';
import React from 'react'



export const CounterApp = ({ value }) => {

    const handleAdd  = () =>{
        // console.log(event)
        console.log('+1');
        value = 1000;
    }


  return (
    <>
        <div>CounterApp</div>
        <h2> { value } </h2>
        
        <button onClick={handleAdd}>
            +1
        </button>
    </>
    
  )
}

CounterApp.protoTypes ={
    value: PropTypes.number.isRequired
}
