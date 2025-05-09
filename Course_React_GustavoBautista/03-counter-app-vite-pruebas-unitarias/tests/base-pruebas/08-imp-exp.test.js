import { getHeroeById, getHeroesByOwner } from '../../src/base-pruebas/08-imp-exp';
import heroes from '../../src/data/heroes';

describe('Pruebas 08-imp-exp.js', () => { 

    test('getHeroeById  debe de retornar un heroe por ID', () => { 

        const id = 1;
        const hero = getHeroeById(id);
        
        expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' })
     });


     //pidamos un heroe que no exista
     test('getHeroeById  debe de retornar undefined si no existe el ID', () => { 

        const id = 100;
        const hero = getHeroeById(id);
        
        expect(hero).toBeFalsy();
     });



     //!TAREA
     //debe de retornar  un arreglo con los heroes de DC
     //length===3 ---> evaluar de 3 elementos
     //evaluar el toEqual al arreglo filtrado a esos 3 heroes


     test('getHeroesByOwner debe de retornar un arreglo con los heroes de DC', () => { 
            const owner = (
                'DC'
            );
            const heroesDC = getHeroesByOwner(owner);
            expect(heroesDC).toEqual(heroesDC.filter( (heroe) => heroe.owner === owner));
            
           console.log(heroesDC);

      });

      //debe de retornar un arreglo con los heroes de marvel
     //length === 2
     test('getHeroesByOwner debe de retornar un arreglo con los heroes de MARVEL', () => { 
        const owner = (
            'Marvel'
        );
        const heroesMarvel = getHeroesByOwner(owner);

        expect(heroesMarvel).toEqual(heroesMarvel.filter( (heroe) => heroe.owner === owner));
        
        console.log(heroesMarvel);

      })





     






     
 })