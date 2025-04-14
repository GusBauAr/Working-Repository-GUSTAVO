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


  function App() {
    const [board, setBoard] = useState(
      Array(9).fill(null)
    )
    const [turn, setTurn] = useState(TURNS.X)

    const updateBoard = (index) => {
      //con estas tres lineas hace que se actualice 
      const newBoard = [...board]
      newBoard[index] = turn
      setBoard(newBoard) 

      const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
      setTurn(newTurn)
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