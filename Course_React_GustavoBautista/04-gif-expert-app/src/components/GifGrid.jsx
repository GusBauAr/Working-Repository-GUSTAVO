import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({category}) => {

    getGifs(category);

  return (
    //creamo sun fragmento
    <>
        <h3>{category}</h3>
        
    </>
  )
}




