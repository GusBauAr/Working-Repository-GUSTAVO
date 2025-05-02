(()=>{


    //variable LET
    //la variable Var ya no se usa la mayoria de lso navegadores no esta compatible, ya no se debe de trabajar con var
    let a ='gustavo';
    console.log(a);
    
    //las contantes son muy utilizadas para trabajr con variables
    const nombre = 'gustavo';


    const heroe = {
        //la contante puede tener sus propiedades
        a:1,
        b:2,
    }

    //!IMPORTANTE
    //?ES RECOMENDABLE TRABAJAR CON CONTANTES HASTA QUE SEPAMOS QUE ESO VA A CAMBIAR

    //tambien las funciones de flecha son muy utilizadas en la asignacion de una funcion 
     
    //etName va ser igual a una funcion de flecha
    const getName1 = () =>{


    }

    //esto es una asignacion de una funcion anonima que ahora va tener el nombre de getName
    const  getName2 = function(){

    }


    //este es una funcion tradicional
    function getName3(){

    }


    //
    const getName4 = ()=> {
        console.log('viejo getName')
    }

    //!SIEMPRE HAY QUE USAR CONSTANTES

})()