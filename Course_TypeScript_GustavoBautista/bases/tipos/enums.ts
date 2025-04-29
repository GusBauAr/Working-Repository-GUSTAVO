(() => {

//es un tipo de dato que solo existe en typesript
//es como decir el volumen:
//1 es el mas bajo
//5 es intermedio
//10 es el mas alto 
//to eso es un valor semantico que al verlor sabemos como esta el volumen 1 es bajo, 5 es intermedio y 10 es alto

//!pero que pasaria si el volumen esta en ....3 

    enum AudioLevel {
        // creamos los valores
        min,
        medium,
        max,
    }

    // currentAudio es de tipo AudioLevel y AudioLevel es de tipo enum --- > enumeracion
    let currentAudio = AudioLevel.medium;

    console.log(currentAudio); // la respuesta es 1

    // let currentAudio = AudioLevel.//!medium;
    //si el medium cambiamos por lo que agregamos
    // si nosotro colocamos min ----> esto es 0
    // si nosotro colocamos max ----> esto es 2
    // esto nos da a entender que es semantico
//...........................................................

    //?nosotros igual podemos hacer que el min, medium, max tengan valores

    // enum AudioLevel {
    //     creamos los valores
    //     min = 1,
    //     medium = 5,
    //     max = 10,
    // }

})()