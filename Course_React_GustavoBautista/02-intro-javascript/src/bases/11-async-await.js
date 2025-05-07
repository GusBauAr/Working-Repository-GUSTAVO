//async -await

//creamos una constante
const getImagen = async()=>{


    try {

        const apiKey ='cYhGHwjil7O4Gvf0ZuNWXrIwPj9PwcoQ';
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await resp.json();
        const {url} = data.images.original;
        const img  = document.createElement('img');
        img.src = url;
        document.body.append(img);  

    } catch (error) {
        console.error(error);
        
    }
    



} 

getImagen();






// const apiKey ='cYhGHwjil7O4Gvf0ZuNWXrIwPj9PwcoQ';

// const  peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

// peticion
//     .then(resp => resp.json()) //esto retorna una promesa
//     .then(({data}) => {//promesas en cadena
//         const {url} = data.images.original;
        
//         const img  = document.createElement('img');
//         img.src = url;

//         document.body.append(img);

//     })

// .catch(console.warn);