


const heroes  = ['batman', 'superman', 'mujer maravilla', 'aquaman'];
//lo que queremos hacer es barrer casa uno estos elementos y sacarlos en consola
//lo vamos hacer con el ciclo for

console.warn('for tradicional');
for(let i = 0; i < 5; i++){// el ciclo for tiene 3 partes se inicializa, condicion como del while y el incrementador
    //inicializacion de la variable que i es igual a 0, que puede ser cualquier numero
    //condicion que el ciclo for se va a ejecutar, se va ejecutar cuando este condicion siempre y cuando sea verdadera i < 5
    //despues la condion para incrementar i ++
    console.log(heroes[i]);
    //al ejecutar nos sale undefined, en nuestro codigo esta diciendo que lo haga 5 veces pero en nuestro array solo tenemos 4 objetos y no tenemos 5 (i<5), normalmente se coloca heroes.lenght
}
//.............................................................................................

console.warn('For in'); //es lo mismo comoel for pero este el ciclo for in es mucho mas limpio 
for(let i in heroes){ //el for in se va a encargar de manejar mi condicion y salir del ciclo cuando ya no aya mas elementos 
    console.log(heroes[i]);
}

//............................................................................................

console.warn('For of'); //es mucho mas utilizado para poder obtener referencias valores de objetos o valores de una manera mas sencilla
for(let heroe of heroes){// lo que hace es extraer el valor que se encuentra dentro del arreglo y lo regresa a la variable heroe (ler heroe of heroes)
    console.log(heroe);
}