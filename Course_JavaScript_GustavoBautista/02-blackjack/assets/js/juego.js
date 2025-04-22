// 2C = two  of  clubs
// 2D = two  of  diamonds
// 2H = two  of hearts
// 2S = two  of spades


//arreglo
let deck = [];
const tipos =['C', 'D', 'H', 'S'];
const especiales =['A', 'J', 'Q', 'K'];

let puntosJugador = 0,
    puntosComputadora =0;

//referencias del html
const btnPedir = document.querySelector('#btnPedir');
const btnDetener = document.querySelector('#btnDetener');

const divCartasJugador = document.querySelector('#jugador-cartas');
const divCartasComputadora = document.querySelector('#computadora-cartas');
const puntosHTML = document.querySelectorAll('small');



//esta funcion crea un anueva baraja de cartas 
const crearDeck = ( ) => {
    for (let i = 2; i <= 10; i++){
        for (let tipo of tipos){
            deck.push(i + tipo);
        }
    }
    for (let tipo of  tipos){
        for (let esp of especiales){
            deck.push(esp + tipo);
        }
    }
    
    deck = _.shuffle(deck);
    console.log(deck);
    return deck;

}
crearDeck();

//esta funcion me permite tomar una carta 
const pedirCarta = () =>{
    if (deck.length === 0){
        throw 'no hay cartas en el deck';

    }
    
    const carta = deck.pop();// selecciona la ultima posicion del array

    return carta;
}
//pedirCarta();
//.................................................................
//OPCION 1

// const valorCarta = (carta) => {
//     //extraer la primera letra
//     const valor = carta.substring(0, carta.length-1); //se toma el primer valor de la carta
//     let puntos = 0;
//     //2=2 10=10 3=3
//      if(isNaN(valor )){//evaluega lo qeu esta entre parentecis si es un numero o no 
//         puntos = (valor === 'A') ?  11 : 10;
//      } else{
//         puntos = valor * 1;
//     }
//     console.log(puntos);
// }
//valorCarta('9D');
//...................................................................

//MAS RESUMIDA

const valorCarta = (carta) => {
    const valor = carta.substring(0, carta.length-1); //se toma el primer valor de la carta
    return(isNaN(valor)) ?
        (valor === 'A') ? 11 : 10 //primera condicion ternaria
        : valor * 1;
}

//TURNO DE LA COMPUTADORA
const turnoComputadora = (puntosMinimos) => {

    do{
        const carta = pedirCarta();
        puntosComputadora = puntosComputadora + valorCarta(carta); //suma los puntos
        puntosHTML[1].innerText = puntosComputadora;
    
        //<img class="carta" src="assets/cartas/2D.png">
        const imgCarta = document.createElement('img');
        imgCarta.src = `assets/cartas/${ carta }.png`;
        imgCarta.classList.add('carta');
        divCartasComputadora.append(imgCarta);

        if (puntosMinimos > 21){
            break;
        }


    }while( (puntosComputadora < puntosMinimos) && (puntosMinimos <=  21));
}

    

//EVENTOS...

btnPedir.addEventListener('click',() => { //funcion tradicional o de flecha
    const carta = pedirCarta();
    puntosJugador = puntosJugador + valorCarta(carta); //suma los puntos
    puntosHTML[0].innerText = puntosJugador;

    //<img class="carta" src="assets/cartas/2D.png">
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`;
    imgCarta.classList.add('carta');
    divCartasJugador.append(imgCarta);
    


    if(puntosJugador > 21){
        console.warn('PERDISTE');
        btnPedir.disabled = true;
        btnDetener.disabled = true;
        turnoComputadora(puntosJugador); 
    }else if (puntosJugador === 21){
        console.warn('GANASTE');
        btnPedir.disabled = true;
        btnDetener.disabled = true;    
        turnoComputadora(puntosJugador);
    }

});

btnDetener.addEventListener('click', () =>{
    btnPedir.disabled = true;
    btnDetener.disabled = true;
    turnoComputadora(puntosJugador);
    });

