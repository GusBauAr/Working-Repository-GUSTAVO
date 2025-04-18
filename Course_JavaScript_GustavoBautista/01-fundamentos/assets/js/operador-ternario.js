//dias de semana abrimos a las 11
//pero los fines de semana abrimos alas 9

//entra a un sitio web, para consultar si esta abierto hoy.....

const dia = 1; // 0:domingo, 1:lunes, 2:martes, 3:miercoles, 4:jueves, 5:viernes, 6:sabado
const horaActual = 11; // colocas a la hora de llegada a la tienda

//variables
let horaApertura;
let mensaje; //esta abierto o esta cerrado, hoy abrimos a las xxxxxx

if (dia === 0 || dia === 6){
    console.log ('Fin de Semana');
    horaApertura = 9; // fines de semana se habre a las 9
}else{
    console.log ('dia de Semana');
    horaApertura = 11; //los dias de la semana se abre a las 11
}

if (horaActual >= horaApertura){
    mensaje='esta abierto';
}else{
    mensaje = `esta cerrado, hoy abrimos a las${horaApertura}`; 
}

console.log ({horaApertura, mensaje});

//..................................................................................


//dias de semana abrimos a las 11
//pero los fines de semana abrimos alas 9

//entra a un sitio web, para consultar si esta abierto hoy.....

const diaa = 1; // 0:domingo, 1:lunes, 2:martes, 3:miercoles, 4:jueves, 5:viernes, 6:sabado
const horaActuall = 11; // colocas a la hora de llegada a la tienda

//variables
let horaApertura2;
let mensaje2; //esta abierto o esta cerrado, hoy abrimos a las xxxxxx

// if (dia === 0 || dia === 6){
//     console.log ('Fin de Semana');
//     horaApertura2 = 9; // fines de semana se habre a las 9
// }else{
//     console.log ('dia de Semana');
//     horaApertura2 = 11; //los dias de la semana se abre a las 11
// }

horaApertura2 = ( [0,6].includes ( diaa ) ) ? 9 : 11;

// if (horaActual >= horaApertura2){
//     mensaje2='esta abierto';
// }else{
//     mensaje2 = `esta cerrado, hoy abrimos a las${horaApertura2}`; 
// }

mensaje2 = (horaActuall >= horaApertura2) ? 'esta abierto' : `esta cerrado, hoy abrimos a las${horaApertura2}`;

console.log ({horaApertura2, mensaje2});
