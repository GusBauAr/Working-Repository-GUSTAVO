import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";



describe('Pruebeas en 09-promesas.js', () => {
    //el done nos ayuda a decir espeate a que este codigo termine 
    test('getHeroeByIdAsyn debe de retornar un heroe  ', (done) => { 

        //creamos el id 1
        const id = 1;
        //es una tarea asincrona entonces se usa (then)
        getHeroeByIdAsync(id).then(hero =>{

            //vamo a esperar
            expect (hero).toEqual({
                id: 1,
                name: 'Batman',
                owner: 'DC'
            });

            done();

        })

     });




     //!IMPORTANTE hay que evaluar la excepcion

     test('getHeroeByIdAsyn debe de optener un error si heroe no existe', (done) => {
        
        const id = 100;
        getHeroeByIdAsync(id)
            .then(hero => {
                
                expect(hero).toBeFalsy();

                done()
            })
            .catch(error => {

            expect(error).toBe(`No se pudo encontrar el heroe ${id}`)

            done();
        });
        



        // //creamos el id 1
        // const id = 1;
        // //es una tarea asincrona entonces se usa (then)
        // getHeroeByIdAsync(id).catch(error => {
            
        //     //estaria esperando.....tobe, un string podemos evaluar de esta manera 
        //     expect(error).toBe('No se pudo encontrar el heroe ${id} ');

        //     done();
        // });
        
     });


 })