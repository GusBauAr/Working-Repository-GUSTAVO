import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);

  return (
    //creamo sun fragmento
    <>
      <h3>{category}</h3>
      <div className="card-grid">
        {
          //mostrar los titulos de las imagenes
          images.map((image) => (
            <GifItem key={image.id} {...image} />
          ))
        }
      </div>
    </>
  );
};
