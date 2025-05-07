// eslint-disable-next-line no-unused-vars
const heroes = [
    {
        id: 1,
        name: 'Batman',
        owner: 'DC'
    },
    {
        id: 2,
        name: 'Spiderman',
        owner: 'Marvel'
    },
    {
        id: 3,
        name: 'Superman',
        owner: 'DC'
    },
    {
        id: 4,
        name: 'Flash',
        owner: 'DC'
    },
    {
        id: 5,
        name: 'Wolverine',
        owner: 'Marvel'
    },
];

//exportacion individual
export const owners =['DC', 'Marvel'];//exportaciones individuales
export default heroes;// exportaciones por defecto

//exportamos un objeto
// export{
//     heroes as default,
//     owners    

// }