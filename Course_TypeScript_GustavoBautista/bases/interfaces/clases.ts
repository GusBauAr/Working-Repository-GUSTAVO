//funcion anonima auto invocada
(()=>{

    //creamos una interfaz
    interface Xmen{
        name: string;
        realName: string;
        //tener la definicion de un metodo
        //que deberia ser una funcion que no regresa nada y deberia de recibir algo ejm: id de tipo string o number y que regrese un string (es opcional)
        mutantPower(id: number):string;

    }

    interface Human{
        age: number;
    }




    //pero como lo podemos relacionar con una clase?????

    class Mutant implements Xmen, Human{
        //ahora ocmo le digo a esta clase que debe de implementar cada de una de las cosas que este en mi interface definida
        //!IMPORTANTE NO SE PUEDE EXTENDER (no se pude usar extend Xmen por que es una interface no funciona si quieres llamar os valores que esta dentro de la interface Xmen)
        //!lo que usa es el ------>>( implemnets)---> vamos a implemntar los valores de la interface Xmen a la clase
        //por ejm: nosotros podemos crear otra interface e implementar los valores a a la clase



        public age: number;
        public name: string;
        public realName: string;

        //creamos una metodo
        mutantPower(id: number){
            return this.name + ' ' + this.realName
            
        }







    }




})()