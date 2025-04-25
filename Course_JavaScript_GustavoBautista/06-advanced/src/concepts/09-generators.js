

/**
 * 
 * @param {HTMLDivElement} element 
 */

//todo: nos genera una secuencia de valores la cual podemos utilizarlo para diferentes casos
export const generatorFunctionsComponent = (element) => {

    const myGenerator = myFirstGeneratorFunction();


    console.log(myGenerator.next());// se emite el primer valor // done: false, cuando ya se emite todos los valores saldra donde: true
    console.log(myGenerator.next());// se emite el segundo valor
    console.log(myGenerator.next());// se emite el tercero valor
    console.log(myGenerator.next());// se emite el cuarto valor
    console.log(myGenerator.next());// se emite el return por que ya no hay // valores donde:true
    
}

//todo: es una funcion generadora y no se puede usar en funcion de flecha (=>)

function* myFirstGeneratorFunction(){
    //el (yield) es como un return, es como seder algo
    yield 'primer valor'
    yield 'segundo valor'
    yield 'tercero valor'
    yield 'cuarto valor'

    return 'ya no hay valor';
    yield 'ya no puedo hacer nada'
}