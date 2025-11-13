// const skills: string [] = ['Bash', 'Counter', 'Healing', true, 123];
const skills: string [] = ['Bash', 'Counter', 'Healing'];
// si el objeto o variable  nunca va cambiar simpe hay que manejar como una constante -->"const"
//eso es una regla en JavaScript
//la ventaja de las conts son mas ligeras que las variables let por que no tiene metodo de asignacion 


//ahora que pasarioa si nosotros queremos crear un objeto

//creamos una interfaz para tipar
interface Character {
    name:string;
    hp:number;
    skills: string [ ]; //este es un arreglo de strings
    hometown?:string; //el signo de "?" quiere decir que es opcional
}
const strider: Character = {
    name: 'Straider',
    hp: 100,
    skills: ['Bash', 'Counter']
}

strider.hometown = 'Rivendell';

console.table(strider)

export {}