import{Todo} from '../todos/models/todo.model';


const Filters = {
    All: 'all',
    Completed: 'complete',
    Pending: 'pending'
}




const state = {
    todos: [
        new Todo('Piedra del alma'),
        new Todo('Piedra del infinito'),
        new Todo('Piedra del tiempo'),
    ],
    filter: Filters.All,
}

const initStore = () => { //la indea de este initStore va inicializar si tengo informacion en el STORE, el initStore se va llamar en el main
    console.log(state);
    console.log('InitStore 😸');
}

export default {
    initStore,

}

