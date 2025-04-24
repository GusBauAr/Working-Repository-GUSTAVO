

/**
 * 
 * @param {HTMLDivElement} element 
 */

export const environmentsComponent = (element) => {

    console.log( import.meta.env); //variable de entorno
    //variables de entorno 
    const html = `
        DEV: ${import.meta.env.DEV}<br/>
        PROD: ${import.meta.env.PROD}<br/>
        KEY: ${import.meta.env.VITE_API_KEY}<br/>
        URL: ${import.meta.env.VITE_BASE_URL}<br/>
    `;
    element.innerHTML = html;
}


//todo: asi es como sale en la consola del navegador 

// {BASE_URL: '/', DEV: true, MODE: 'development', PROD: false, SSR: false, …}
// BASE_URL: "/"
// DEV: true
// MODE: "development"
// PROD: false
// SSR: false
// VITE_API_KEY: "EstaEsMiLavePrivada"
// VITE_BASE_URL: "http://localhost:5173/"
// [[Prototype]]: Object