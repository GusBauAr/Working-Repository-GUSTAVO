import { heroes } from '../data/heroes';

/**
 * 
 * @param {HTMLDivElement} element 
 */

export const generatorsAsyncComponent = async (element) => {

    const heroGenerator = getHeroGenerator();
    let isFinished = false;

    do {
        const {value, done} = await heroGenerator.next();
        isFinished = done;
        if (isFinished) break;

        console.log({value, done})

        element.innerHTML = value;
        
    } while (!isFinished)
}

//creamos una funcion generadora, es una funcion asincrona
async function* getHeroGenerator(){
    
    for (const hero of  heroes){
        await  sleep();
        yield hero.name;
    }
    return ' ya no hay mas heroes';
}


const sleep = () =>{
    return new Promise (( resolve) => {
        setTimeout(() => {
            resolve();
        },500);
    })
}