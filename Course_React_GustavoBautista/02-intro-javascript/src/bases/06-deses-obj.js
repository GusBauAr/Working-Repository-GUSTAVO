//desestructuracion 
//designacion desestructurante

const { useContext } = require("react");

//creamos una constante , es es un objeto
const persona ={
    nombre:'Gustavo',
    edad:45,
    clave:'gusus',
};
//nosotros necesitamos trabajar con esas propiedades

console.log(persona.nombre);
console.log(persona.edad);
console.log(persona.clave);

//...........................................................
//!AQUI ENTRAMOS CPON ASIGNACION DESESTRUCTURANTE

const persona2 ={
    nombre:'Gustavooooo',
    edad:45,
    clave:'gusgggggggus',
};
//Entonces creamo suna constante

// const {nombre, edad, clave} = persona2;

// console.log(nombre);
// console.log(edad);
// console.log(clave);

//...........................................................\
//!TENEMOS OTROS USOS DE DESESTRUCTURACION  

const retornaPersona = ({nombre, edad}) => {
    console.log(nombre, edad);//gustavo 45
}
retornaPersona(persona)

//...........................................................\
//!TENEMOS OTROS USOS DE DESESTRUCTURACION QUE ASIGNAMOS VALORES POR DEFECTO
const retornaPersona2 = ({nombre, edad, rango = 'capitan'}) => { //estamos estableciendo valor por defecto en este caso Rango = 'capitan'
    console.log(nombre, edad, rango);//gustavo 45
}
retornaPersona2(persona);

//...........................................................\
const retornaPersona3 = ({nombre, edad, clave, rango = 'capitan'}) => { //estamos estableciendo valor por defecto en este caso Rango = 'capitan'
    // console.log(nombre, edad, rango);//gustavo 45

    //creamos un nuevo objeto
    return{
        nombreCalve:clave,
        anios:edad,
    }
}
 const avenger  = retornaPersona3(persona);
console.log(avenger);



//............................................................
//!HAY QUE HACER LA DESESTRUTURACION  DEL useContext
const useContext = ({clave, nombre, edad, rango = 'capitan'}) => { 
    
    return{
        nombreCalve:clave,
        anios:edad,
        latlng:{
            lat:234.234,
            lng:234.234,
        }
    }
}
 const {nombreCalve, anios, latlng}  = useContext(persona);//desestructuracion anidadas
console.log(nombreCalve, anios, latlng);
console.log(latlng);








