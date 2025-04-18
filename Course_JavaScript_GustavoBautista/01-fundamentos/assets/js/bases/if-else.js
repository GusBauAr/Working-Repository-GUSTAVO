//primera estructura de control

let a = 1;

if(a >= 10){ // undefined , null, una asignacion
    console.log("a es mayor o igual que 10");
}else{ //else es considera 'sino'
    console.log('a es menor a 10')
}
// console.log('fin del programa')

//........................................................................

const hoy =new Date();
let dia = hoy.getDate(); // 0: domingo, 1:lunes, 2:martes.........
console.log({dia})

if (dia === 0){ //esta no es una condicion booleanada, esto es una asignacion , no se tiene que usaer un =, tampoco se usa ==, === el triple igual es es igual
    console.log('Domingo');

}else if(dia === 1){
    console.log('lunes') 
    // esto es una condicion anidadas
    // if (dia === 1 ){
    //     console.log('Lunes');
    // }else{
    //     console.log('NNo es lunes ni domingo')
    // }

    //console.log('No es Domingo')
}else if( dia === 2){
    console.log('martes');
}else{
    console.log('no es lunes, martes o dmingo.....');
}

//SIN USAR IF ELSE, O Switch, UNICAMENTE OBJETOS
//dia de la semana
dia = 6;

const diasLetras = {
    0:'domingo',
    1:'lunes',
    2:'martes',
    3:'miercoles',
    4:'jueves',
    5:'viernes',
    6:'sabado',
}
console.log(diasLetras[dia]);

//..........................................................................
const diasLetras2 = ['domingo','lunes','martes','miercoles','jueves','viernes','sabado',];

console.log(diasLetras2[dia]);

