(()=>{

    interface Client{ //la interface no tiene signo igual (=)
        name:string;
        age:number;
        //no es recomendable anidar este tipo de tipado
        adress: Address
    }
    //lo que se recomienda es tener una nueva interface para adress
    interface Address{
        id:number,
        zip: string,
        city: string
    }

    //vamos a plantearnos el sigunete objeto
    const client: Client = {
        name: 'gustavo',
        age: 20,
        //en este momento creamos un objeto que esta dentro de un objeto, como hago que la interface se pueda adaptar????
        adress:{
            id:125,
            zip: 'k23 SUD',
            city:'ottawa'
        }
        //cmo hago una interfaz que me ayude a controlar otros objetos que tengan esta misma caracteristica
    //entoces creamos una interaz arriba 
    }
   //ahora creamos otro objeto
   const client2: Client = {
        name: 'Gustavo',
        age:30,
        //ahora si nostros queremos colocar el adress...????
        adress:{
            id:125,
            zip: 'k23 SUD',
            city:'ottawa',
        }
    }








    //..........................................................................
        //!METODOS EN LA INTERFAZ

    interface Client{ //la interface no tiene signo igual (=)
        name:string;
        age:number;
        //no es recomendable anidar este tipo de tipado
        adress: Address
        //implementacion de un metodo getFullAddress
        getFullAddress(id:string): void;
        

    }
    //lo que se recomienda es tener una nueva interface para adress
    interface Address{
        id:number,
        zip: string,
        city: string
    }

    //vamos a plantearnos el sigunete objeto
    const clientt: Client = {
        name: 'gustavo',
        age: 20,
        //en este momento creamos un objeto que esta dentro de un objeto, como hago que la interface se pueda adaptar????
        adress:{
            id:125,
            zip: 'k23 SUD',
            city:'ottawa'
        },        
        //cmo hago una interfaz que me ayude a controlar otros objetos que tengan esta misma caracteristica
    //entoces creamos una interaz arriba
    
        //implementacion de metodo
        getFullAddress(id: string){
            return this.adress.city;
        }
    }
   //ahora creamos otro objeto
   const client22: Client = {
        name: 'Gustavo',
        age:30,
        //ahora si nostros queremos colocar el adress...????
        adress:{
            id:125,
            zip: 'k23 SUD',
            city:'ottawa',
        },
        //impleentacion de metodo
        getFullAddress(id: string){
            return this.adress.city;
        }
        
    }

})()



//!las interfaces no crean instancias
//no se puede hacer
const  nuevoCliente = new  Client()// no puede por que Client es una interface, no sirve para crear