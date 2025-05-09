import React from 'react';
import ReactDOM from 'react-dom/client';
import { CounterApp } from './CounterApp';

import { FirstApp } from './FirstApp';
// import { HelloWorldApp } from './HelloWorldApp';
import './styles.css';



ReactDOM.createRoot( document.getElementById('root') ).render(
    <React.StrictMode>
        {/* <CounterApp value={ 20 } /> */}
        <FirstApp title="Hola, Soy Vegeta" />
    </React.StrictMode>
);



























// // se necesita esta importanciones para renderizar mi aplicacion..........................................
// import React from 'react';
// import ReactDOM from 'react-dom/client';
// // import { HelloWorldApp } from './HelloWorldApp';
// import { FirstApp } from './FirstApp';
// // .........................................
// import './styles.css'
// // import { CounterApp } from './CounterApp';


// ReactDOM.createRoot(document.getElementById('root')).render(
//     <React.StrictMode>
//         {/* <CounterApp value={20}/> */}
//         <FirstApp/>
//     </React.StrictMode>
// );
















