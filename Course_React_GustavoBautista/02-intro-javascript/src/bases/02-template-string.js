


const  nombre = 'Gustavo';
const apellido =' Bautista Arce'


//concayenacion de todos
// const nombreCompleto = nombre + ' ' + apellido;
//otro tipo de concatenacion
const nombreCompleto = `Yo soy ${nombre} ${apellido} `;//dentro del template string, una operacion de javaScript se usa ${}

console.log(nombreCompleto);



//creamo suna funcion 
function getSaludo(nombre){//podemos enviar como argumento el nombre dentro los ()
    return `hola ${nombre}`;
}

//llamamos la funcion dentro de un template string
 console.log(`este es un texo: ${getSaludo(nombre)}`);