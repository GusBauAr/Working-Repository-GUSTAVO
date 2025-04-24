import { Todo } from '../todo.model';
import { createTodoHTML } from './'; //se importa de los casos de uso por eso no hay necedidad de colocar el nombre de la carpeta por que busca ahi mismo

/**
 * 
 * @param {String} elementId 
 * @param {Todo} todos 
 */

export const renderTodos = (elementId, todos = []) => {
    //aqui va generar los todos

    //TODO: referencia
    const element = document.querySelector (elementId);

    todos.forEach( todo => {
        element.append(createTodoHTML(todo))
        
    });
}