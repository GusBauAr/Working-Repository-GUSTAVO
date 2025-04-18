//los objetos literales son como los diccionarios de python
//los objetos literales son una forma de agrupar datos y funciones en un solo objeto
let personaje = { //cuando vemos llaves hay que asociarlo como un objeto
    nombre: 'Tony Stark',
    codeName: 'Ironman',
    vivo:false,
    edad: 40,
    coords: {
        lat: 34.034,
        lng: -118.70
    },
    trajes: ['Mark I', 'Mark V', 'Hulkbuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, California'
    },
    'ultima-pelicula': 'Infinity War',
}; 
console.log(personaje); //{nombre: 'Tony Stark', codeName: 'Ironman', vivo: false, edad: 40, coords: {…}, trajes: Array(3)}
console.log('Nombre',personaje.nombre); //Tony Stark
console.log('Nombre',personaje ['nombre']); //40
console.log('Edad',personaje.edad); //nos muestra la edad
console.log('Coordenadas',personaje.coords); // coordenadas del objeto {lat: 34.034, lng: -118.7}
console.log('No.trajes',personaje.trajes.length); //nos muestra la cantidad de trajes que es 3
console.log('Ultimo traje',personaje.trajes[personaje.trajes.length - 1]); // hacemos el calculo y es el Hulkbuster el ultimo traje

const x = 'vivo'; //creamos una variable para poder acceder a la propiedad
console.log('Vivo',personaje[x]); //false

console.log('Ultima pelicula',personaje['ultima-pelicula']); //Infinity War
//los objetos literales pueden tener propiedades y metodos



