(()=>{

    //sotros podemo susar constructor privado para controlar la manera en la cual las intancias  son ejecutadas


    //creamos un`a clase
    class Apocalipsis{

        //creamo suna propiedad estatica, Y LA ISTACIA VA SER DE TIPO APOCALIPSIS
        static instance:Apocalipsis
        //!cual es la idea de usar un constructor peivado?
        //vamos  a contolar la manera en como este  constructor va ser lamado
        private constructor(public name:string){

        }
        //creamos un metodo para crear el apocalipsis.....
        //creamos una propiedad estatica llamar apocapsis
        static callApocalipsis():Apocalipsis{ //lo que hace es que me va a regresar una instancia   de apocalipis 
            if (!Apocalipsis.instance){ //si el Apocalipsis no existe (!) , entonces se crea una nueva instancia
                // se esta creando esa instancia solo si ese valor (static instance:Apocalipsis) esta undefinded o null
                Apocalipsis.instance = new Apocalipsis('soy apocalipsis... el unico')
            }

            return Apocalipsis.instance;
        }

    }
    const apocalipsis1 = Apocalipsis.callApocalipsis();
    const apocalipsis2 = Apocalipsis.callApocalipsis();
    const apocalipsis3 = Apocalipsis.callApocalipsis();

    //creamos una nueva constante
    // const apocalipsis1 = new Apocalipsis('soy apocalipsis1..... el unico');
    // const apocalipsis2 = new Apocalipsis('soy apocalipsis2..... el unico');
    // const apocalipsis3 = new Apocalipsis('soy apocalipsis3..... el unico');

    // console.log(apocalipsis1, apocalipsis2, apocalipsis3); 



    
})()