(()=>{

    //!PARAMETROS OBLIGATORIOS DE LAS FUNCIONES
    //creamos una nueva funcion
    //constante fullName va ser igual a una funcion de flecha
    //como primer argumento tenermos firstName y segundo lastName ----> que va regresar un string
    const fullName = (firstName:string, lastName:string): string => { //si o si hay que colocar el tipo de variable hay que espesificar para que no nos de error

        //gregsamos el valor
        return`${firstName}, ${lastName}`;

    }

    // si yo quisera utilizar esta funcion 
    //tendria que almacenar en una variable o imprimir en consola
    // ejm:
    const name = fullName('gustavo', 'bautista');
    //luego imprimimos el name en consola si la quiseramos ver
    console.log([name]);
    

})()