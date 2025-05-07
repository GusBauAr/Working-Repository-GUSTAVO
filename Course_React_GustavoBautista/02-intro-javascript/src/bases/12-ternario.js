//Operador condicional ternario


const activo = true;

// let mensaje ='';

// if(!activo){ //inactivo, sin el ! activo
//     mensaje ='Activo';
// }else{
//     mensaje = 'Inactivo';
// }
// const mensaje = (activo) ? 'Activo': 'Inactivo';// en dentro del parentecis (activo )podemos colocar el ! pqra hacer activo e inactivo

const mensaje = activo && 'Activo'//activo, pero cuando colocamos ---> ! en activose coloca inactivo false

console.log(mensaje);

