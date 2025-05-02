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



    //.......................................................................................
    //!                         DESESTRUCTURACION DE ARREGLOS
    //creamos una nueva constante

    const avengersArr:[string, string, string] = ['Capitan america', 'Ironman', 'Hulk']; //este es un arreglo de strings

    //si nostros hacemos una desestructuracion podemos hacerlo
    // const ironman = avengersArr[1]// esta es segunda posicion
    // console.log({ironman})

    //ahora vamos hacer la desestructuracion 
    //le estamos diciendo intenta desestructuras pero de un objeto[] tenemos que colocar las llaves cuadradas
    //?const [] =avengersArr;

    //vamos a llamar a Ironman entonces seria segunda posicion 0, (1)
    //colocamos espacio y luego (,) depues la posicion 1 ironman y luego 2da posicion ignoramos que es hulk
    const [ capi, ironman, ] = avengersArr;
    console.log({ironman, capi});

    //cuando hacemos una desestructuracion de arreglos, no impota que nombre lo coloquemos, ejm:
    //const [capi , ironman,hombre verde ] = avengersArr;

    //!IMPORTANTE
    //!Simepre coocar el tipo de datos\(const avengersArr:[string, string, string])
    //const avengersArr:[string, string, string] = ['Capitan america', 'Ironman', 'Hulk']; //este es un arreglo de strings

})()