

//arreglos en javaScript
//es una coleccion de informacion que se encuentran dentro de una misma variable

//creamos una arreglo
const arreglo = [1, 2, 3, 4];
// arreglo.push (1)//no es recomendable utilizar push por que el push modifica el objeto principal


let arreglo2 = [...arreglo, 5];

//se agrega el metodo map que viene en los arrego en react
//El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.
const arreglo3 = arreglo2.map(function(numero){//este es un callback una funcion que se ejcuta dentro del metodo en esta caso el map
    return numero * 2;// si queremo smultiplicar el arreglo por 2--->(5)[2, 4, 6, 8, 10]
}); 
console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);