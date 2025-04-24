import{Todo} from '../todos/models/todo.model';


const Filters = {
    All: 'all',
    Completed: 'completed',
    Pending: 'pending'
}



//tods todos los objetos pasan por referencia
const state = {
    todos: [ 
        //recordar que todos los objetos pasan por referencia
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

const getTodos = (filter = Filters.All ) => { //tenemos 3 tipos de filtros, all, completed y pending
    switch(filter){
        case Filters.All:
            return [...state.todos]; // se puedo utilizar el operador spreed (...) y regresar un nuevo arreglo con cana uno de estos valores
        case Filters.Completed:
            return state.todos.filter( todo => todo.done); //con ese filter va regresar un nuevo arreglo. (todo.done esta en true)
        case Filters.Pending:
            return state.todos.filter( todo => !todo.done);// (!todo.done, esta en false se invirtio el true por false por el --> !)
        default:
            throw new  Error(`Option ${filter} is not  valid`);
        

    }
}

/**
 * 
 * @param {String} descripcion 
 */
const addTodo = ( descripcion) => { //AGREGAR
    if  (!descripcion) throw new Error('Description is required');

    state.todos.push(new Todo(descripcion));
}


/**
 * 
 * @param {String} todoId /es un identificador
 */
const toggleTodo = (todoId) => { //UN TOGGLE COMO UNA ACTUALIZACION
    throw new  Error('Not implemented');
}



const deleteTodo = (todoId) => {
    state.todos = state.todos.filter(todo => todo.id !== todoId);//vamos a regresar todos los todos que no coincida con el id (todoId)
}



const deleteCompleted = (todoId) => {
    state.todos = state.todos.filter(todo => todo.done);
}


/**
 * 
 * @param {Filters} newFilter es de tido filters 
 */
const setFilter = (newFilter = Filters.All) => {
    state.filter = newFilter;
}


const getCurrentFilter = () => { 
    return state.filter;
}



export default { //nuestro stor tiene todos estos metodos o funciones que nos va servir a nostros para hacer la manipulacion lo que queremos en nuestro store
    addTodo,
    deleteCompleted,
    deleteTodo,
    getCurrentFilter,
    getTodos,
    initStore,
    loadStore,
    setFilter,
    toggleTodo,

}

