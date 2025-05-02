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
//!lo comentamos para que no veamos en la consola lo que se esta ejecutando de aqui
    // //si yo quiero utilizarlas
    // const antman : Avenger =new Avenger('Antman','Capital');//ahora llenamos dentro del parentecis
    // console.log(antman);//cuando colocamos punto vemos que nos muestra solo los publicos
    //                     //pero no me muestra el static..????, si queremos tener acceso al estatico tenemos que hacer:
    // // console.log(Avenger.avgAge )//Ahora nos muestra y el resultado en consola es 35
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
    //!lo comentamos para que no veamos en la consola lo que se esta ejecutando de aqui
    // const antman2 : Avenger2 =new Avenger2('Antman','Capital');
    // console.log(antman2);
    // //si queremos ver el avgAge
    // console.log(Avenger2.avgAge);//35
//.............................................................................................................................
//!                         METODOS PUBLICOS Y PRIVADOS


    class Avenger3 {
                
        static avgAge:number = 35;//que pasa co los estaticos?????
        //creamos un metodo estatico
        static getAvgAge(){
            // return this.name;
        }

        constructor(private name: string, public team:string, public realName?: string){

        }

        //creamos un metodo publico bio con la concatenacion --->`${this.name}(${this.team})`
        public bio(){
            return `${this.name}(${this.team})`
        }
    }

//!lo comentamos para que no veamos en la consola lo que se esta ejecutando de aqui
    // const antman3 : Avenger3 =new Avenger3('Antman','Capital');
    // console.log(antman3.bio());//esta fuera de la clase
    // console.log(Avenger3.getAvgAge());//se declara aqui el static
    

})()