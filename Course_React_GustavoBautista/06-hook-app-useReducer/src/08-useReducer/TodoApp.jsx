import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";

const initialState = [
//   {
//     id: new Date().getTime(),
//     description: "recolectar la piedra del alam",
//     done: false,
//   },

//   {
//     id: new Date().getTime() * 3,
//     description: "recolectar la piedra del infinito",
//     done: false,
//   },
];

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || [];
}


export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState, init );

  //efecto secundario
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  
    
  }, [todos])
  



  const handleNewTodo = (todo) => {
    const action ={
        type:'[TODO] Add Todo',
        payload:todo
    }
    dispatch(action);
  };

  return (
    <>
      <h1>
        TodoApp 10, <small>pendientes: 2</small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">

          {/* todoList */}
          <TodoList todos={todos} />
          {/* fin todoliST */}

        </div>
        <div className="col-5">
          <h4>Agregar Todo</h4>
          <hr />

          {/* todo add -> onNewTodo*/}
          <TodoAdd onNewTodo={handleNewTodo} />
          {/* fin de todoadd */}
        </div>
      </div>
    </>
  );
};
