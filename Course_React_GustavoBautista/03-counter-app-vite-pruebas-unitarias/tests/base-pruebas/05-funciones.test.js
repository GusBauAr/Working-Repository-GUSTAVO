import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones"


describe('Pruebas 05-funciones.js', () => { 

    test('getUser debe de retornar un objeto', () => {

        //creamos un objeto
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        }
        //creamo suna variable

        const user = getUser();
        
        expect(testUser).toEqual(user);

    });

    //!TAREA

    test('getUsuarioActivo debe de retornar un objeto', () => { 
        const name = 'Gustavo'

        const testUserAct = {
            uid: 'ABC567',
            username: name,
        }

        const userAct = getUsuarioActivo(name);

        expect(testUserAct).toEqual(userAct);



    })


})



