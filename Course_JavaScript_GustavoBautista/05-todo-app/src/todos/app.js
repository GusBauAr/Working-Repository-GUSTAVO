import html from './app.html?raw';
import todoStore from '../store/todo.store';
import { renderTodos } from './models/use-cases';


const ElemenIDs ={
    TodoList: '.todo-list',
}

/**
 * 
 * @param {String} elementId 
 */
export const App = (elementId) => { //funcion en flecha

    const displayTodos = () => {
        const todos = todoStore.getTodos(todoStore.getCurrentFilter());
        renderTodos(ElemenIDs.TodoList, todos);

    }


    

    //cuando la funcion App() se llama
    (() => {
        const app = document.createElement('div');
        app.innerHTML = html;
        document.querySelector(elementId).append(app);
        displayTodos();

    })();

}