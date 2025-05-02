(()=>{

    //creamo suna classe con su constructor
    class Avenger{
        constructor(
            //en el contructor definimos 2 propiedades
            public name: string,
            public realName: string,

        ){
            // console.log('constructor Avenger llamado')
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
            // console.log('constructor Xmen llamado');
        }
        //creamos un metodo para llamar al getFullName
        getFullNameDesdeXmen(){
            // console.log(super.getFullName())

        }

    }

    //vamos a crear una instancia de la classe wolverine
    const wolverine = new Xmen('Wolverine', 'Logan', true);

    //ejecutamos
    // console.log(wolverine);
    // wolverine.getFullNameDesdeXmen();

//....................................................................................


    class Avenger2{
        constructor(
            public name: string,
            public realName: string,

        ){
            // console.log('constructor Avenger2 llamado')
        }
        getFullName2(){
            return `${this.name} ${this.realName}`
        }
    }

//!QUE ES UN GETS Y SETS
//?son como un metodo 


    class Xmen2 extends Avenger2{
        constructor(
            name:string,
            realName:string,
            public isMutant:boolean,
        ){
            super(name, realName)
            // console.log('constructor Xmen2 llamado');
        }

        //get es un metodo
        get fullname(){ //los gets tiene que regresar un valor
            return`${this.name} - ${this.realName}`
        }
        //set es un metodo, que resive un valor y establece algo
        set fullName(name:string){//vamos a recibir un name:string, el set solo recibe un argumento, no puede recibir dos
            // return''; //el set no regresa nada
            if (name.length < 3){
                throw new Error('el nombre debe de ser mayor a 3 letras'); //validacion si le borro letras de gustavo
            }
            this.name = name;//estamos recibiendo este argumento
        }

        getFullNameDesdeXmen2(){
            // console.log(super.getFullName2())

        }

    }

    const wolverine2 = new Xmen2('Wolverineeee2', 'Logannnn2', true);

    // wolverine2.getFullNameDesdeXmen2();
    
    // wolverine2.fullName = 'gustavo'
    // console.log(wolverine2.fullname);
})()