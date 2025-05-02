//funcion anonima autoinvocada
(()=>{

    type Avengers ={ // el tipo Avengers----> asignamos en (const avengers:Avengers) ahi abajo y tambien en (const printAvengers = (avengers:Avengers))
        //rapidamente tenemos el objeto
        nick: string;
        ironman: string;
        vision: string;
        activo: boolean;
        poder: number;
    }
    //creamos un objeto
    //si mantenemos el cursor en avengers vermos los tipos de variables
    const avengers: Avengers = {
        nick:'samuel',// string
        ironman:'robert',//string
        vision:'paul',//string
        activo: true,//boolean
        poder: 1500.23452,//number
    }
//................................................................................................................
    //!ESTA ES UNA DESESTRUCTURACION TRADICIONAL
    //la desestructuracion consiste que vamos a tomar el objetos (avengers), podemos sacar las propiedades que nos interesa
    //          estamos desestructurando aqui
    const {poder, vision} = avengers 

    //a la vez puedo hacer le console.log
    //el toUpperCase ---> es para colocar todo el mayuscula
    console.log(poder.toFixed(2), vision.toUpperCase())
//...............................................................................................................
    //si nosotros vamso a usar mas d euna ves este objeto (avengers) seria bueno que crearamos un tipo o una interzaf
//...............................................................................................................
//!si yo al dia de mañana estoy pensando en que voy a crear una funcion
    //la funcion recibe los avengers
    //luego nos creamos un (TYPE) arriba
    //..................................................................................
    //?tambien tenemos a nuestra disposicion el operador rest (...rest)
    //?                                 es decir el resto de operadores va a llamar
    const printAvengers = ({ ironman,...resto }:Avengers) =>{
        console.log(ironman, resto)
    }
    printAvengers(avengers);
    //................................................................................
    //?                         aqui en (avengers) podemos desestructurar los argumentos aqui
    // const printAvengers = ({ ironman }:Avengers) =>{
    // ?    / se remplaza el (avengers.vision) por (ironman)
    //     console.log(ironman)
    // }
    // printAvengers(avengers);
    //.........................................................................
    // const printAvengers = (avengers:Avengers) =>{
    //     console.log(avengers.vision)
    // }
    // printAvengers(avengers);
    //....................................................................

})()