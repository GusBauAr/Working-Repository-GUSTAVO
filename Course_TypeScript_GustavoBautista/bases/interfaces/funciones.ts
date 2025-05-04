//funcion anonima autoinocada

(()=>{

    //creamos una interface
    interface addTwoNumbers {
        //vamos a recinir numeros a y b
        (a: number, b:number):number; //este que esta definido es mi funcion 

    }
    // creamo sun let
    let addTwoNumbersFunction: addTwoNumbers;
    //debemos de recibir los argumentos de tipo number(a:number b:number)
    addTwoNumbersFunction = (a:number, b: number)=>{
        //tiene que regresar un numero
        return 10;
    }



})()