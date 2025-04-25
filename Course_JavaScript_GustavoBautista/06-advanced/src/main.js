import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { environmentsComponent } from './concepts/01-environments';
import { callbacksComponent } from './concepts/02-callbacks';
import { promiseComponent } from './concepts/03-promises';


document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      
    </div>
    
  </div>
`;
const element = document.querySelector('.card');

// environmentsComponent(element);
// callbacksComponent(element);
promiseComponent(element);



//todo:que es variables de entorno?
//?son variables que dependiendo del entorno o donde se este ejecutando la aplicacion van a tener un valor distinto.

//?por jem:  yo estoy de manera local, mis variables se ejecuten a mi localhost pero cuando yo estoy en produccion puede que yo cambie el localhost por una URL en especifico.

//?quiero que mis variables sean de entorno
