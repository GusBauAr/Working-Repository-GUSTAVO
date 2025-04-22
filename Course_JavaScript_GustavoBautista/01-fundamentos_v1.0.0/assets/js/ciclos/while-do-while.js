


const carros = ['ford', 'mazda', 'honda', 'toyota'];

let i = 0;

// while(i < carros.length){//condicion dentro de los () tiene que ser false o true
//     console.log(carros[i]);

//     i = i + 1 ; //i vas ser el valor de i y lo voy a sumar 1
//     i ++; //i mas mas toma el valor y aumenta 1
//     i +=1 //ingrementas de 1 en 1, de 2 en 2 o de 3 en 3
// }
//..........................................................................
//CICLO WHILE
console.warn('while')
//undefined
//null
//false
while( carros [i]){//condicion dentro de los () tiene que ser false o true
    if (i === 1){ // es la primera posicion de; array
        // break
        i++; //condicion
        continue;
    }
    console.log (carros[i]);
    i++;
    
}
//.....................................................................................
//CICLO DO WHILE
console.warn('Do while') // solo se va a ejecutar el bloque interno una vez
let j = 0;// SI JOTA FUERA 10 ENTRA A LA CONDICION J++ Y EN console.log(carros)[j]); va mostrar undefinde
do{
    console.log(carros[j]);//el undefinde no hay un valor en esa posicion
    j++;

}while(carros[j]);