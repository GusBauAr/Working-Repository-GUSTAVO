(()=>{

    //si nosotros tenemos un tercer argunmento ejm; upper ---> para hacerlo mayuscula y este va ser de tipo boolean
                        //obligatorio       opcional      (este valor upper queremos hacerlo por defectoa false)   
    const fullName = (firstName:string, lastName?:string, upper: boolean = false): string => {
        
        
        //si yo no mando nada, va a tener valor de false 
        if (upper){ //si el upper tiene valor de true, entonces va a regresar todo ese string pero con (.toUpperCase)

            return`${firstName}, ${lastName || '------'}`.toUpperCase();
        }else{

            return`${firstName}, ${lastName || 'no lastname'}`;
        }

    }

    //ahora si colocamos el tercer argumento true es opcional pero tiene el valor por defecto boolean, entonces va estar todo con mayuscula
    const name = fullName('gustavo', 'bautista', true);
    
    console.log([name]);
    

})()