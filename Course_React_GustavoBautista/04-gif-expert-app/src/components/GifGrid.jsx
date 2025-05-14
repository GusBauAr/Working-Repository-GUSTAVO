import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getGifs(category).then((newImages) => setImages(newImages));
  }, []);

  return (
    //creamo sun fragmento
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        {
          //mostrar los titulos de las imagenes
          images.map((image) => (
            <GifItem 
            key={image.id} 
            { ...image }
            />
          ))
        }
      </div>
    </>
  );
};
