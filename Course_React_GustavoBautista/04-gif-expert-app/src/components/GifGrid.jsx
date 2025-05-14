import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category }) => {

  const [images, setImages] = useState([]);

  useEffect(() => {
    getGifs(category)
    .then(newImages => setImages(newImages));


  },[])


  return (
    //creamo sun fragmento
    <>
      <h3>{category}</h3>
      <ol>
        {
          //mostrar los titulos de las imagenes
          images.map(({id, title}) => (
            <li key={id}>{title}</li>

          ))
        }
      </ol>
   
    </>
  );
};
