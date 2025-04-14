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

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
   }

   const checkEndGame = (newBoard) => {
    //revisar si el tablero esta lleno
    //si el tablero esta lleno y no hay ganador se retorna true
    return newBoard.every((square) => square !== null)
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
        setWinner(newWinner) 
        //actualizacion del estado acincrono
      } else if (checkEndGame(newBoard)) {
        setWinner(false)
      }
      //si el tablero esta lleno y no hay ganador se empata
    }   

    



    return (
      <main className="board">
        <h1> tres raya</h1>
        <button onClick={resetGame}>Reset del juego</button>
        <section className="game">
          {
            board.map((square, index) => {
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
                  {square}

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
        {
          winner !== null && (
            <section className="winner">
              <div className="text">
                <h2>
                  {
                    winner === false ? 'Empate' : 'Ganó:'
                  }
                </h2>
                <header className="win">
                  {winner && <Square>{winner}</Square>}
                </header>

                <footer>
                  <button onClick={resetGame}>empezar de nuevo</button>
                </footer>
              </div>
            </section>
          )
        }

      </main>
    )
  }           
    
      
  export default App