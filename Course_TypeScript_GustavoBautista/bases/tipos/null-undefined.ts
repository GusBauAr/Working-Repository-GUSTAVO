(() => {

    let nada: undefined = undefined;

    console.log(nada)

    //....................................................

    // si nostoros que remos espesificar que un booleano sea undefined
    //entonces hay que espesificarlo siempre
    let isActive: boolean = undefined;

    console.log(isActive);
//................................................................
  
//strictNullCheck

    //los valores permitidos para un booleano son:
    //? true, false, undefined, null, pero con la restriccion que tenemos //strictNullCheck ya no se puede
    //! null no es lo mismo que undefined
    let isActive2: boolean = null;
    

    console.log(isActive2)
})()