(()=>{

    //creamos nuestra clase la primera letra en mayuscula
    //ahora nosotros podemos definir propiedades a nuestro Avenger
    class Avenger  {

        name;
        power;

        //creamos un constructor
        //se ejecuta el contructor cunado se ejecuta la creacion de una nueva instancia mediante (new avenger)
        constructor(name='no name', power=0){//podemos inicializar y pedir valores
            //ahora podemos decir que queremos establecer los valores de nombre y poder vasados en los valores con:
            this.name = name;
            this.power = power; //el power recibimos como argumento
        }

    }

    //ahora creamos una clase nueva, que esta clase va a extender de Avenger
    //es decir va a extender la classe Avenger de arriba
    class FlyingAvenger extends Avenger{
        flying; // no sabemos que tipo de dato es... lo que tenemos que hacer es especificar en algun lado de la aplicacion por ejemplo en el contructor 

        constructor(name , power){
            super(name, power);//el super llama al constructor de la clase con la cual extiende, entonces en el super vamos a guardar el name y el power

            //cuando se vaya a llaamr el FlyingAvenger, que this.flaying va ser true
            this.flying = true;
        }

    }


    //creamos una nueva constante
    const hulk = new Avenger('hulk', 9000);//el primer argumento es hulk y el segundo el poder 9000 
    const falcon = new FlyingAvenger('falcon', 50);// nos creamos un nuevo avenger y en su constructor esta vacio entonces no mandamos nada

    console.log(hulk);
    console.log(falcon);

})()