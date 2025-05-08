import { string } from 'prop-types';
import { retornaArreglo } from '../../src/base-pruebas/07-deses-arr'

describe('Pruebas en 07-deses-arr.js', () => {

    
    test('debe de retornar un string y un numero', () => { 
      
        //hacemos la desestructuracion de esos valores
        const [letters, numbers] = retornaArreglo();

        //  expect (letters).toBe('ABC');
        expect (numbers).toBe(123);


        //evaluacion de tipos
        expect (typeof letters).toBe('string');
        expect (typeof numbers).toBe('number');


        //este espera cualquier tipo de string, puede ser (ABCkslkdalsdjnl)----->en el return ['ABC', ---];
        expect(letters).toEqual(expect.any(String));

    })


 })