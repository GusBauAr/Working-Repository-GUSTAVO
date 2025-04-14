import { useState } from "react"

const TURNS={
  X:'x',
  O:'o'
  }
  
  
  //renderizado condicional de turno
  const Square = ({children, isSelected, updateBoard, index}) => {
    
    const className = `square ${isSelected ? 'is-selected' : ''}`
    // const className = `square ${isSelected ? 'is-selected' : ''}`
    
     
    const handleClick = () => {
      updateBoard(index)
    }

    //cuanse haga click en el div va a ejecutar la funcion handleClick
    return (
      <div onClick={handleClick} className={className}>
        {children}
      </div>
    )
  }


  const WINNER_COMBOS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]


  function App() {
    const [board, setBoard] = useState(
      Array(9).fill(null)
    )
    const [turn, setTurn] = useState(TURNS.X)
    //null esque no hay ganador, false es que hay un empate
    const [winner, setWinner] = useState(null)
    
    const chwckWinner = (boardToCheck) => {
      //se revisa  todas las combinaciones ganadoras
      //para ver si x o o es el ganador
      //si hay un ganador se retorna el ganador
       for (const combo of WINNER_COMBOS) {
        const [a, b, c] = combo
        if (
          boardToCheck[a] &&
          boardToCheck[a] === boardToCheck[b] &&
          boardToCheck[a] === boardToCheck[c]
        ) {
          //si no hay un ganador se retorna null
          return boardToCheck[a]
        } 
    }
    return null
  }




    const updateBoard = (index) => {
      //si el index ya tiene un valor no se puede volver a cambiar
      if(board[index] || winner) return
      //con estas tres lineas hace que se actualice el tabero
      const newBoard = [...board]
      newBoard[index] = turn
      setBoard(newBoard) //asincrono
      //con estas lineas hace que se cambie el turno
      const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
      setTurn(newTurn)
      //vamos arevisar si hay un ganador
      const newWinner = chwckWinner(newBoard)
      //la actualizacion de los estados en react son asincronos 
      if (newWinner) {
        alert(`El ganador es ${newWinner}`)
        setWinner(newWinner) //actualizacion del estado acincrono
      }
    }   



    return (
      <main className="board">
        <h1> tres raya</h1>
        <section className="game">
          {
            board.map((_, index) => {
              //componentes, renderizado  elementos, cada uno de los Squares dentro del tablero
              return(
                //componente Square
                //el componente Square se le pasa la propiedad key para identificarlo
                //el componente Square se le pasa la propiedad index para identificarlo
                //el componente Square se le pasa la propiedad updateBoard para actualizar el tablero
                //el componente Square se le pasa la propiedad children para mostrar el contenido
                <Square 
                  key={index}
                  index={index}
                  updateBoard={updateBoard}
                >
                  {board[index]}

                </Square>                
                )
              })
            }
        </section>
        <section className="turn">
        <Square isSelected={turn === TURNS.X}>
        {TURNS.X}
        </Square>

        <Square isSelected={turn === TURNS.O}>
        {TURNS.O}
        </Square>
        </section>
      </main>
    )
  }           
    
      
  export default App