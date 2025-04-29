(() => {
    //tres formas de declaran un string
    const batman: string  = 'Batman';
    const linternaVerde: string = "linternaVerde";
    const bolcanNegro: string =`Heroe: volcanNegro`;


    const abc = 123;
    console.log(`I'm ${batman}`) //cuando tenermos una palabra que se utiliza el comilla simple (') ahi recien se puede usar backticks

    console.log(batman.toUpperCase()) //BATMAN todo en mayuscula
//typeScript no les va asegurar no cometer errrores
//ejm;

console.log(batman[10]?.toUpperCase() || 'no esta presente')
//el ---> (?) este es un null check 


})()