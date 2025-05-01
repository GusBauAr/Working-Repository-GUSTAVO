(()=>{


    //cuando nosotros colocamos el (?)signo de insterrogacion significa que es opcional al tipo de valor lo coloca opcional
    const fullName = (firstName:string, lastName?:string): string => { //si o si hay que colocar el tipo de variable hay que espesificar para que no nos de error

       
        return`${firstName}, ${lastName || 'no lastname'}`;

    }

    
    const name = fullName('gustavo');// el consola sale gustavo undefined
    //pero si no tiene nombre al lastName colocamos un operador ( || OR ) colocando que no tiene apellido(no lastname) ${lastName || 'no lastname'}
    
    console.log([name]);
    

})()