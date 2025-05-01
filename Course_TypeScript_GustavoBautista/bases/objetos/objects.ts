(()=>{ //funcion anonima autoinvocada

    //creamos un objeto literario
    let flash ={
        //typeScript ya lo lee por defecto el tipo de variable que estoy utilizando
        name:'Gustavo Bautista', //strings
        age: 24,//number
        powers:['super velocidad', 'viajar en el tiempo']//arreglo de strings
    }


    //ahora a flash vamos a colocar una nueva propiedad
    flash = {

        //para que no nos de error typeScript nos pide que coloquemos las mismas propiedades: name, age, powers
        name:'Clark kent',
        age: 60,
        powers:['super','fuerza'],
    }
    //..............................................................................
    //!CREAR OBJETOS CON TIPOS ESPECIFICOS
    //en los objetos no importa la posicion de la propiedades ({name: string, age:number, powers:string[]})
    //Nosotros podemos definir que metodos o propiedades puede tener en este caso el tipo: name es string, age es number y powers es un arreglo de strings
    let flash2: {name: string, age?:number, powers:string[]}  ={
       
        name:'Gustavo Bautista', 
        age: 24,
        powers:['super velocidad', 'viajar en el tiempo']
    }
    
    //si nos falta definir una propiedad nos va dar error en flash2 por que si o si necesita ya que la hemos definido
    //pero tambien podemos colocar que puede ser opcional con el signo de (?)---> ejm: (age?:number)
    flash2 = {
        name:'Clark kent',
        // age: 60,
        powers:['super','fuerza'],
    }

    //.............................................................................
    //!METODOS DENTRO DE LOS OBJETOS
    //lo que vamso hacer es colocar la definicion del tipo de la funcion getName que retorna un string
    //                                                          Es una funcion que no recibe ningun argumento y la salida es un string y es de tipo opcional (?)
    let flash3: {name: string, age?:number, powers:string[], getName?: () => string}  ={
       
        name:'Gustavo Bautista', 
        age: 24,
        powers:['super velocidad', 'viajar en el tiempo']
    }
    
    flash3 = {
        name:'Clark kent',
        // age: 60,
        powers:['super','fuerza'],

        getName(){
            return this.name; //retorna este nombre
        }
    }

    console.log(flash3.getName?.())


})()

