const elMayor = (a, b) => (a > b)? a : b ;

const tieneMembresia = (miembro) => (miembro) ? '2 dolares' : '10 dolares';

console.log (elMayor(10, 15));
console.log (tieneMembresia(true));

const amigo = false;
const amigosArr = [
    'Peter',
    'Tiny',
    'dr. Strange',
    amigo ? 'Thor' : 'loki',
    // (()=> 'Nick Fury') () // funcion vacia auto invocando
    elMayor (10,15)
];
console.log(amigosArr);

const nota = 65; //A+ A B+
const grado = nota >= 95 ? 'A+':
              nota >= 95 ? 'A':
              nota >= 95 ? 'B+':
              nota >= 95 ? 'B':
              nota >= 95 ? 'C+':
              nota >= 95 ? 'C': 'F';
console.log ({nota,grado});