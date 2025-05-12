import { useState } from 'react';


export const GifExpertApp = () => {
  
    const [categories, seTcategories] = useState(['One Punch', ' dragon ballZ']);

    //cramos una funcion 
    const onAddCategory = () => {
      seTcategories([...categories, 'Valorant']);
    }


  return (
    <>
        {/* titulo */}
        <h1>GifExpertApp</h1>
        {/* imput */}


        {/* listado de gifs */}

        <button onClick={onAddCategory}>agregar</button>


        <ol>
          {
          categories.map(category => {
            return<li key={category}>{category}</li>
          })
          }
        </ol>

        {/* git item */}
    </>
    
  )
}
