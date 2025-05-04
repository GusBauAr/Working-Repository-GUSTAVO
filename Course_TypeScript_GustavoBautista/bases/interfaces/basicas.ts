(()=>{


    //una interfaz casi funciona lo mismo como un type es lo mismo
    //nosotros colocamos interface y no lleva el (=) es como una clase
    //una interfaz es  extensible que se usa extend y type no
    interface hero  {
        name: string;
        age?: number;
        powers: string[]; 
        getName?: ()=> string;
    }

    
    let flash: hero = {
        name:'Gustavo Bautista', 
        age: 24,
        powers:['super velocidad', 'viajar en el tiempo']
       
    }

    
    let superman : hero  ={
        name:'Clark Kent', 
        age: 60,
        powers:['super velocidad'],
       
        getName(){
            return this.name;
        }
    }
    


})()