(()=>{

    let  avenger = 123;
    //?cuando le declaramos con let y no le establecemos ningun valor nos va salir any ---->(cualquier cosa)
    let exist; //any 
    let power;//any
    


    //una costante tiene que estar incicializada  o va tener un error    
    //? const existt; 
//.........................ANY..........................
    let avengerr: any =123
    let existt;
    let powerr;

    avengerr =  'dr stone'
    console.log(avengerr.charAt(0)); //el primer caracter
    

    avengerr = 125.255635;
    console.log (avengerr.toFixed(2));

    console.log(existt);
    console.log(power);

//..........................NUMBER..........................

    let avengerrr: number;
    let existtt;
    let powerrr;

    avengerrr =  'dr stone'; // se queja en esa asignacion por que no es un number
    console.log(avengerrr.charAt(0)); //tambien ahi se queja por que no es tipo number


    avengerrr = 125.255635;
    console.log (avengerrr.toFixed(2));

    console.log(existtt);
    console.log(powerrr);
//........................STRING..............................

    let avengerrrr: string;
    let existttt;
    let powerrrr;

    avengerrrr =  'dr stone'
    console.log(avengerrrr.charAt(0)); //el primer caracter


    avengerrrr = 125.255635; // no se lo puede asignar a un numero por eso sale error
    console.log (avengerrrr.toFixed(2));//en string no tiene el metodo toFixed

    console.log(existttt);
    console.log(powerrrr);

//.............................STRING CASTEO TRATARLE COMO STRING.....................................

    let avengerrrrr: any = 123;
    let existtttt;
    let powerrrrr;

    avengerrrrr =  'dr stone'

    //?el as string es un tipo de casteo como decirle tratale como string
    //!PERO NO SE ESTA CAMBIANDO EL TIPO DE VARIABLE
    //?pero cuando colocamos (.chatAt) tenemos todas los metodos y propiedades que tiene el String
    console.log((avengerrrrr as string).charAt(0)) ;
    console.log(avengerrrrr(0)) ;
    


    avengerrrrr = 125.255635; 
    console.log (avengerrrrr.toFixed(2));

    console.log(existtttt);
    console.log(powerrrrr);



})()





