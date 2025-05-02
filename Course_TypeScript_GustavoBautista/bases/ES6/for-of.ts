//funcion anonima autoinvocada
(()=>{

    //creamos un tipo, de tipo Avenger
    type Avenger ={
        //vamos a tener 
        name: string,
        weapon: string,
    }

    //creamos una constante ironman que va ser de tipo Avenger
    //definimos nuestros objetos como tipo
    const ironman:Avenger = {
        name: 'Ironman',
        weapon: 'Armorsuit',
    }

    const capAmerica:Avenger = {
        name: 'Capitan America',
        weapon: 'Escudo',
    }

    const thor:Avenger = {
        name: 'Thor',
        weapon: 'Martillo',
    }

    //ahora creamos un arreglo, este es un arreglo de Avenger
    const avengers: Avenger[] = [ ironman, capAmerica, thor];

    // el ciclo (for-of)nos permite tener aqui la variable por el arreglo en este caso (avengers)
    //lo que hace  es barrer el arreglo y por cada interacion va extraer primero ironman, luego capitan america y thor
    for (const avenger of avengers) {
        //hacemos un console.log
        console.log(avenger.name, avenger.weapon)// en consola sale, nombre y su herramienta de poder
        
    }


})()