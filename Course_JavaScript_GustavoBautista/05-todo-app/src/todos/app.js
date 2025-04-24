import html from './app.html?raw';
import todoStore, { Filters } from '../store/todo.store';
import { renderTodos } from './models/use-cases';


const ElemenIDs ={
    ClearCompletedButton: '.clear-completed',
    TodoList: '.todo-list',
    NewTodoInput: '#new-todo-input',
    TodoFilters: '.filtro',

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



    //refrencias HTML
    
    const newDescriptionInput = document.querySelector(ElemenIDs.NewTodoInput);
    const TodoLisUL = document.querySelector(ElemenIDs.TodoList);
    const clearCompletedButton = document.querySelector (ElemenIDs.ClearCompletedButton);
    const filtersLIs = document.querySelectorAll(ElemenIDs.TodoFilters);


    //listeners

    newDescriptionInput.addEventListener('keyup', (event) => {
        if (event.keyCode !== 13) return;
        if (event.target.value.trim().length === 0)return;

        todoStore.addTodo(event.target.value);
        displayTodos();
        event.target.value = '';
    })

    TodoLisUL.addEventListener('click', (event) => {
        const element = event.target.closest('[data-id]');
        todoStore.toggleTodo(element.getAttribute('data-id'));
        displayTodos();
    })

    TodoLisUL.addEventListener('click', (event) => {
        const isDestroyElement = event.target.className === 'destroy';
        const element = event.target.closest('[data-id]');
        if (!element || !isDestroyElement) return;
        todoStore.deleteTodo(element.getAttribute('data-id'));
        displayTodos();
    })

    clearCompletedButton.addEventListener('click', () =>{
        todoStore.deleteCompleted();
        displayTodos(); //para renderizar todo
    });

    filtersLIs.forEach(element => {
        element.addEventListener('click', (element) => {
            filtersLIs.forEach(el => el.classList.remove('selected'));
            element.target.classList.add('selected');


            switch(element.target.text){
                case 'Todos':
                    todoStore.setFilter(Filters.All);
                break;
                case 'Pendientes':
                    todoStore.setFilter(Filters.Pending);
                break;
                case 'Completados':
                    todoStore.setFilter(Filters.Completed);
                break;
            }
            displayTodos();

        });

    });

    
 
}