(()=>{

    //creamo suna classe con su constructor
    class Avenger{
        constructor(
            //en el contructor definimos 2 propiedades
            public name: string,
            public realName: string,

        ){
            console.log('constructor Avenger llamado')
        }
        //nos creamos una propieda privada
        getFullName(){
            //el return es this.name concatenando con con el this.realName
            return `${this.name} ${this.realName}`
        }
    }

    //nos creamos otra classe que va a extender de Avengers
    //Xmen va a tener a su disposicion todo lo que el Avenger tenga
    class Xmen extends Avenger{
        //creamos un constructor
        constructor(
            //el argumento pasamso al padre sin colocar el public o private
            name:string,
            realName:string,
            public isMutant:boolean,
        ){
            //por un momento hay que llamar al super()
            //luego pasamos estos argumento al super
            super(name, realName)
            console.log('constructor Xmen llamado');
        }
        //creamos un metodo para llamar al getFullName
        getFullNameDesdeXmen(){
            console.log(super.getFullName())

        }

    }

    //vamos a crear una instancia de la classe wolverine
    const wolverine = new Xmen('Wolverine', 'Logan', true);

    //ejecutamos
    console.log(wolverine);
    wolverine.getFullNameDesdeXmen();

})()