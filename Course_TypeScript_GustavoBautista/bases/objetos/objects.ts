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




})()