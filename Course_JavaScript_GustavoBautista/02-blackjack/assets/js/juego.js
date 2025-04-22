// 2C = two  of  clubs
// 2D = two  of  diamonds
// 2H = two  of hearts
// 2S = two  of spades


//arreglo
let deck = [];
const tipos =['C', 'D', 'H', 'S'];
const especiales =['A', 'J', 'Q', 'K'];

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

    console.log(deck);
    console.log (carta);
    return carta;
}
pedirCarta();