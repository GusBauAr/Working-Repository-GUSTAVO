(() => { //funciones anonimas
    'use strict'


        //arreglo
    let deck = [];
    const tipos =['C', 'D', 'H', 'S'],
          especiales =['A', 'J', 'Q', 'K'];

    // let puntosJugador = 0,
    //     puntosComputadora =0;
    let puntosJugadores = []; //nos creamos un areglo de jugadores



    //referencias del html
    const btnPedir = document.querySelector('#btnPedir'),
          btnDetener = document.querySelector('#btnDetener'),
          btnNuevo = document.querySelector('#btnNuevo');

    const divCartasJugador = document.querySelector('#jugador-cartas'),
          divCartasComputadora = document.querySelector('#computadora-cartas'),
          puntosHTML = document.querySelectorAll('small');



    //esta funcion inicializa el juego
    const inicializarJuego = (numjugadores = 2) => {
        deck = crearDeck();
        for (let i =0 ; i < numjugadores; i++){
            puntosJugadores.push(0);
        }
        console.log({puntosJugadores});
    }

    //esta funcion crea un anueva baraja de cartas 
    const crearDeck = ( ) => {

        deck =[];
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
        return _.shuffle(deck);;

    }

    //esta funcion me permite tomar una carta 
    const pedirCarta = () =>  {
        if (deck.length === 0){
            throw 'no hay cartas en el deck';
        }
        return deck.pop();
    }
    //pedirCarta();
    //.................................................................
    //OPCION 1

    // const valorCarta = (carta) => {
    //     extraer la primera letra
    //     const valor = carta.substring(0, carta.length-1); //se toma el primer valor de la carta
    //     let puntos = 0;
    //     2=2 10=10 3=3
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

    //creamos una funcion por que hay repetidos de codigo
    const acumularPuntos = () => {

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

        setTimeout(() => {
            
        

        if(puntosComputadora === puntosMinimos){
            alert('NADIE GANA: (');
        }else if (puntosMinimos > 21){
            alert('COMPUTADORA GANA');
        }else if (puntosComputadora > 21){
            alert('JUGADOR GANA');
        }else{
            alert ('COMPUTADORA GANA')
        }
        }, 10);

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

    btnNuevo.addEventListener('click', () => {
        console.clear();
        inicializarJuego();
        //deck = [];
        //deck = crearDeck();

        puntosJugador = 0;
        puntosComputadora = 0;
        puntosHTML[0].innerText = 0;
        puntosHTML[1].innerText = 0;

        divCartasComputadora.innerHTML  = ' ';
        divCartasJugador.innerHTML  = ' ';

        btnPedir.disabled = false;
        btnDetener.disabled = false;

    });

    


})();



