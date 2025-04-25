

/**
 * 
 * @param {HTMLDivElement} element 
 */

export const promiseRaceComponent = (element) => {
    //otro metodo del constructor de las promesas y es bien util cuando nostros tenemos muchas promesas, y solo queremos el resultado de la primera promesao de la promesa que se resuelva mas rapido
    element.innerHTML = 'Loading......';
    const renderValue =(value)=> {
        element.innerHTML = value;
    }
    Promise.race([
        
        slowPromise(),
        mediumPromise(),
        mediumPromise(),
        fastPromise(),
        mediumPromise(),
        slowPromise(),
    ]).then(renderValue);

}

//vamos a definir 3 promesas mediante funciones

//todo: estamos creando una promesa (slowPromise que en 2 segundos -->(2000) va emitir el valor de Slow Promise)
const  slowPromise = () => new Promise(resolve => {
    setTimeout(() => {
        resolve('Slow Promise');
    }, 2000);
})

const  mediumPromise = () => new Promise(resolve => {
    setTimeout(() => {
        resolve('Medium Promise');
    }, 1500);
})

const  fastPromise = () => new Promise(resolve => {
    setTimeout(() => {
        resolve('Fast Promise');
    }, 3000);
})
