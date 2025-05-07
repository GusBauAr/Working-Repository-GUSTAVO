


//objetos literales
//creamos un objeto persona
const persona ={
    //creamos propiedades
    nombre:'Gus',
    apellido: 'Bautista',
    edad:20,
    diereccion:{
        ciudad:'cochabamba',
        zip:435345,
        lat:14.5,
        lng:7234.23,
    }

};
console.log(persona);//si nosotros  creamos llaves ({})estamos creamos un objeto que adentro tiene un apropiedad llama persona y le estamos asignando el valor de tipo persona

//!IMPORTANTE
//si nosotros queremos crear otro objeto clonar una persona 2
//creamos una constante
const persona2 = persona;
persona2.nombre = 'Ozzy'

console.log (persona2);

//........................................................................................
//si creamos nuestro nuevo objeto


const personaa ={
    nombre2:'Gus',
    apellido2: 'Bautista',
    edad2:20,
    diereccion2:{
        ciudad2:'cochabamba',
        zip2:435345,
        lat2:14.5,
        lng2:7234.23,
    }

};
//!IMPORTAMNTE
//?si nostros vamos a clonar el estado de la aplicacion y se hace este tipo de clonacion no va aceptar
const personaa2 = {...personaa};//para no estar escribiendo todos los objetos uno por uno por que son muchos, se creo el operador Espred ---> los tres puntitos(...) se utiliza para hacer un clon o extraer cada uno de las propiedades---> (nombre2:'gus, apellido2:bautista,.....etc)
personaa2.nombre2 = 'Ozzy'
//!ESTA ASIGNACION NUNCA SE DEBE DE HACER

//si nosotros bajamos nuestro console.log hasta el final ---> console.log(personaa);
console.log(personaa);//se modifica la posicion de memoria y va aparecer ozzy ozzy 
console.log (personaa2);

//.......................................................................................