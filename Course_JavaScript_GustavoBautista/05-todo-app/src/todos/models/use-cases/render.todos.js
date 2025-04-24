import { Todo } from '../todo.model';
import { createTodoHTML } from './'; //se importa de los casos de uso por eso no hay necedidad de colocar el nombre de la carpeta por que busca ahi mismo


let element;

/**
 * 
 * @param {String} elementId 
 * @param {Todo} todos 
 */

export const renderTodos = (elementId, todos = []) => {
    //aqui va generar los todos

    
    if (!element)
        element = document.querySelector(elementId);

    if (!element) throw new Error (`Element ${elementId} not found`);

    element.innerHTML = '';

    todos.forEach( todo => {
        element.append(createTodoHTML(todo))
        
    });
}