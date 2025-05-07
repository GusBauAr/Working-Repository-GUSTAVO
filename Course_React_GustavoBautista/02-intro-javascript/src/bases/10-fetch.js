

//creamos una constante API
const apiKey ='cYhGHwjil7O4Gvf0ZuNWXrIwPj9PwcoQ';

const  peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);

peticion
    .then(resp => resp.json()) //esto retorna una promesa
    .then(({data}) => {//promesas en cadena
        const {url} = data.images.original;
        
        const img  = document.createElement('img');
        img.src = url;

        document.body.append(img);

    })

.catch(console.warn);
//como funciona el fetch y promesas en cadena