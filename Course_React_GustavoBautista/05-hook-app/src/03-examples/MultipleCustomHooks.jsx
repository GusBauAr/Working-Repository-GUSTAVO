import React from 'react'
import { useFetch } from '../hooks/useFetch'

export const MultipleCustomHooks = () => {

    const {data, hasError, isLoading} = useFetch('https://pokeapi.co/api/v2/pokemon/6');


  return (
    <>
        <h1> informacion de pokemon</h1>
        <hr/>
        {isLoading && <p>cargando....</p>}

        <h2>{data?.name}</h2>
    </>
  )
}
