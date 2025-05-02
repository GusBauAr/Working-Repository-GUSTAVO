(()=>{

    //creamos una clase
    //definimos una palabra recerbada antes del class
    //?para que nos sirve la clase abstracta?
    //sirve para crear otras clases o para asegurarnos que otras clases implemente lo que nosotros esperamos 
    //nos creamo sotra clase Xmen
    abstract class Mutante{
        constructor(
            public name: string,
            public realName: string,
        ){}
    }

    //creao suna clase para extender de una clase abstracta
    class Xmen extends Mutante{
        //nosotros podemos tener propiedades o metodos especializados para cada uno  de estas clases
        salvarMundo(){//este es un metodo
            return 'mundo salvado';
        }
    }
    //creamos otra clase
    class Villian extends Mutante{
        mundoConquistado(){ //este es un metodo
            return 'mundo conquistado'
        }
    }

    //definimos una constante worverine, nueva instancia este wolverine es de tipo mutante
    const wolverine = new Xmen('Wolverine','Logan');
    //creamos una nueva instancia
    const magneto = new Villian('Magneto','Magnus');

    // console.log(wolverine.salvarMundo());
    // console.log(magneto.mundoConquistado());
    //........................................................................................

    //creamos una funcion
    const  printName = (character: Mutante)=> {
        console.log(character.realName);

    }

    printName(wolverine);//lo hacerpa como argumento


    //!IMPORTANTE
    //?una clase abtracta no sirve para crear intancias, sirve para crear otras clases o que otras clases sean extendidas de ellas
    //? o asegurarme de que un argumento puede ser de cualquier otro tipo, pero siempre y cuando implemente las caracteristicas  de su clase abstracta



})()