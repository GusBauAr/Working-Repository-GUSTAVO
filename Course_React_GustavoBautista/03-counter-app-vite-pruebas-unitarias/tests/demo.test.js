
describe('Pruebas en  <DemoComponent />', () => { //este es uan titulo o descripcion de mi prueba

    test('esta prueba no debe de fallar', () => {

        //1: inicializacion
         const message1 = 'hola mundo';
     
        //2: stimulo
        const message2 = message1.trim();
        //3:observar el comportamiento.... esperado
         expect(message1).toBe(message2); 
     
     
     
     })



})


