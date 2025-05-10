
export const getImagen = async() => {

    try {

        const apiKey = '34dpX6g75RHfgmqvMVsLfSG5zkFpYbTF';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        return url;


    } catch (error) {
        // manejo del error
        console.error(error)
        return 'N se encontro la imagen';
    }
    
}

 getImagen();



