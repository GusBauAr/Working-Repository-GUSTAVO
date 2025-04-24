import{Todo} from '../todos/models/todo.model';


const Filters = {
    All: 'all',
    Completed: 'complete',
    Pending: 'pending'
}



//tods todos los objetos pasan por referencia
const state = {
    todos: [ 
        
        new Todo('Piedra del alma'),
        new Todo('Piedra del infinito'),
        new Todo('Piedra del tiempo'),
    ],
    filter: Filters.All,
}

const initStore = () => { // la indea de este initStore va inicializar si tengo informacion en el STORE, el initStore se va llamar en el main
    console.log(state); 
    console.log('InitStore 😸');
}

const loadStore = () => {
    throw new Error('Not implemented'); 
}

/**
 * 
 * @param {String} descripcion 
 */
const addTodo = ( descripcion) => { //AGREGAR
    throw new  Error('Not implemented');
}
/**
 * 
 * @param {String} todoId /es un identificador
 */
const toggleTodo = (todoId) => { //UN TOGGLE COMO UNA ACTUALIZACION
    throw new  Error('Not implemented');
}

const deleteTodo = (todoId) => {
    throw new  Error('Not implemented');
}

const deleteCompleted = (todoId) => {
    throw new  Error('Not implemented');
}

const setFilter = (newFilter = Filters.All) => {
    throw new  Error('Not implemented');
}

const getCurrentFilter = () => {
    throw new  Error('Not implemented');
}

export default { //nuestro stor tiene todos estos metodos o funciones que nos va servir a nostros para hacer la manipulacion lo que queremos en nuestro store
    initStore,
    addTodo,
    toggleTodo,
    deleteTodo,
    deleteCompleted,
    setFilter,
    getCurrentFilter,

}

