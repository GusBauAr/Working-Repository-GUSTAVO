import '../render-add-button/render-add-button.css'
import { showModal } from '../render-modal/render-modal';

/**
 * 
 * @param {HTMLDivElement} element 
 * @param {() => void} callback
 */
export const renderAddButton = (element, callback) => {


    const fabButton =document.createElement('button');
    fabButton.innerText = '+';
    fabButton.classList.add('fab-button');

    element.append(fabButton);

    fabButton.addEventListener('click', () => {
        showModal();
        
        // throw Error ('No implementado');
    })
}