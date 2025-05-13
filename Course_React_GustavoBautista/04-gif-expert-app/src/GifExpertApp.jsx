import { useState } from 'react';
import { AddCategory } from './components/addCategory';


export const GifExpertApp = () => {
  
    const [categories, setCategories] = useState(['One Punch', ' dragon ballZ']);

    //cramos una funcion 
    const onAddCategory = (newCategory) => {
      // console.log(newCategory)
      setCategories([newCategory, ...categories]);
    }


  return (
    <>
        {/* titulo */}
        <h1>GifExpertApp</h1>
    
        {/* imput */}
        <AddCategory 
        // setCategories={setCategories} 
        //el componente AddCategory va a emitir el value
        onNewCategory = { (value)  => onAddCategory(value)}  
        
        />


        {/* listado de gifs */}

        


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
