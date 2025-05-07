
import PropTypes from 'prop-types';

import React from 'react'

export const CounterApp = ({value}) => {
  return (
    <>
        <div>CounterApp</div>
        <h2>{value}</h2>
    </>
    
  )
}

CounterApp.protoTypes ={
    value: PropTypes.number.isRequired
}
