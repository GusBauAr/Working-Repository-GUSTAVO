(()=>{

    //en typescript existe una palabra recerbada llamda (type) y esa palabra es para definir un tipo

    // el tipo se va llamar hero, parece como si fuera un objeto
    type hero = {
        name: string;
        age?: number;
        powers: string[]; //si cambiamos a number, nos va mostrar los errores mas detalladamente
        getName?: ()=> string;
    }

    //ahora podemos borrar todo lo que esta dentro {name: string, age?:number, powers:string[], getName?: () => string} 
    let flash: hero = {
        name:'Gustavo Bautista', 
        age: 24,
        powers:['super velocidad', 'viajar en el tiempo']
        //si cambiamos a number:-----> powers:(number[])
        // powers:[1,2],
    }

    //lo mismo se hace con superman lo borramos {name: string, age?:number, powers:string[], getName?: () => string}
    let superman : hero  ={
        name:'Clark Kent', 
        age: 60,
        powers:['super velocidad'],
        //si cambiamos a number:-----> powers:(number[])
        // powers:[1],
        getName(){
            return this.name;
        }
    }
    

})()