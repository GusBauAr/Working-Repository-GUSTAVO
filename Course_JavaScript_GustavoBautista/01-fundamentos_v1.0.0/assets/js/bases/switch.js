const dia = 1; // el 0 es el domingo, si quieres trabajar con strings colocas '2'

switch(dia){ //va a evaluar el valor que tenermos dentro y va comparar // dias = 0
    case 0:
        console.log('Domingo');
        break;
    case 1:
        console.log('Lunes');
        break;
    case 2: //en el case colocas '2' para trabajar con string
        console.log('Martes');
        break;
    default:
        console.log('No es lunes, martes o domingo');
}












