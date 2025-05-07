//!desestructuracion de areglos

//creamos nuestra constante
const personajes = ['Goku','Vegeta', 'Trunks']
console.log(personajes[0]);
console.log(personajes[1]);
console.log(personajes[2]);
//...........................................................
//!existe una manera para no esta colocando muchos console.log(personajes[0])
const personajes2 = ['Goku','Vegeta', 'Trunks']
//ahora vamos hacer una desestructuracion de un arreglo
const [p1] = personajes2;
console.log(p1);//Goku

const [, p2] = personajes2;
console.log(p2);//Vegeta

const [, , p3] = personajes2;
console.log(p3);//T runks

//...........................................................
//!creamos una funcion constante que retorna arreglo

const retornaArreglo = ( ) => {
    return ['ABC',123];
}
const [letras, numeros] =  retornaArreglo();
console.log(letras, numeros);//ABC 123

//!...............................................................
//!TAREA
//CREAMOS UNA FUNCION que va retornar un arreglo 
const useState = (valor) => {
    return [ valor, () => {console.log('Hola mundo')}];
}

const arr = useState('Goku');
console.log(arr);

//!...................................................................
//!EJERCICIO DESESTRUCTURACION DE UN ARRAY
//1:El primer valor del arr  se llamara nombre
//2:El segundo valor del arr  se llamara setNombre

const useState2 = (valor) => {
    return [ valor, () => {console.log('Hola mundo')}];
}

const [nombre, setNombre] = useState2('Goku');
console.log(nombre);//goku
setNombre()//hola mundo




