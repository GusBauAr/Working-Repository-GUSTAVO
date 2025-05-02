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

    

})()