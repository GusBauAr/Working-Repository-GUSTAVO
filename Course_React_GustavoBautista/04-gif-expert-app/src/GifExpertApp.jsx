import { useState } from 'react';
import { AddCategory } from './components/addCategory';


export const GifExpertApp = () => {
  
    const [categories, setCategories] = useState(['One Punch','Dragon Ball']);

    
    const onAddCategory = (newCategory) => {
      // console.log(newCategory)

      if (categories.includes(newCategory)) return; //Validar que sean únicos los nombres

      setCategories([newCategory, ...categories]);
    }


  return (
    <>
        {/* titulo */}
        <h1>GifExpertApp</h1>
    
        {/* imput */}
        <AddCategory 
        // setCategories={setCategories} 
        //le pasa la funcion al hijo
        onNewCategory = { (value)  => onAddCategory(value)}  
        
        />


        {/* listado de gifs */}

        
        <ol>
          {
          categories.map((category) => {
            return<li key={category}>{category}</li>
          })
          }
        </ol>

        {/* git item */}
    </>
    
  )
}
