(() => {
   
    let avengers:number=10;
    console.log(avengers)

    const villians: number = 20

    if (avengers < villians){
        console.log('estamos en problemas')
    }else{
        console.log('nos salvamos')
    }

    //nombre de la vareable (avengers) con su valor (123)
    avengers=123; 
    console.log({avengers});

    avengers = Number('777A'); //si nostros colocamos 777A con una letra nos sale NaN 
    //el NaN es considerado un numero en JavaScript
    //pero nos puede conllevar a otro tipo de errores, errores de logica en la aplicacion
    console.log({avengers});


    
})()