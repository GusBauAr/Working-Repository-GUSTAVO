(()=>{ //funcion autoinvocada

    //creamo suna clase
    class Avenger {
        
        //normalmente no se coloca public ni private pero si es buana practica colocarlo
        //estas 3 son propiedades y todas son strings
        private name : string;
        public team: string;
        public realName?: string;// si quieres de manera opcional se coloca (?)
        static avgAge:number = 35;


        //ahora vamos a ocupar el name, team y realName, como lo vamos hacer?
        //se hace con un constructor

        //recibimos los argumentos
        constructor(name: string, team:string, realName?: string){
            //
            this.name = name;
            this.team = team;
            this.realName = realName;

        }
    }

    //si yo quiero utilizarlas
    const antman : Avenger =new Avenger('Antman','Capital');//ahora llenamos dentro del parentecis
    console.log(antman);//cuando colocamos punto vemos que nos muestra solo los publicos
                        //pero no me muestra el static..????, si queremos tener acceso al estatico tenemos que hacer:
    // console.log(Avenger.avgAge )//Ahora nos muestra y el resultado en consola es 35
//.............................................................................................................................
//!                         FORMA CORTA DE ASIGNARPROPIEDADES

    class Avenger2 {
            
        
        // private name : string;
        // public team: string;
        // public realName?: string;
        static avgAge:number = 35;// la propiedad estatica si se puede dejar ahi


        //esta es una sintaxis bien comun que se ve afuera colocar private, public, lo que esta declarada arriba ya no se necesita
        //el constructor no solo establece la propiedad name si no que tambien la crea y la establece de forma privada
        constructor(private name: string, public team:string, public realName?: string){
            
            

        }
    }
    const antman2 : Avenger2 =new Avenger2('Antman','Capital');
    console.log(antman2);
    //si queremos ver el avgAge
    console.log(Avenger2.avgAge);//35



    

})()