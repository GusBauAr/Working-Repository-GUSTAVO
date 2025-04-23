
class Rectangulo {
    #area = 0; //tenemos un problema que se puede cambiar el area de manera intencional o de manera aproposita

    constructor(base = 0, altura = 0){
        this.base = base;
        this.altura = altura;

        //calculo del area
        this.#area = base * altura;
    
    }
    calcularArea(){
        console.log(this.#area * 2);
    }
}

//creamos la instancia de Rectangulo
const rectangulo = new Rectangulo(10, 15);
// rectangulo.#area = 100;
rectangulo.calcularArea();

console.log(rectangulo);