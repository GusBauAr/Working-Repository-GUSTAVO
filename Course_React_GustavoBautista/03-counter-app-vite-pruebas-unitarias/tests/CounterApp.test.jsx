import { render, screen } from "@testing-library/react"
import { CounterApp } from "../src/CounterApp"


describe('pruebas  en el CounterApp.jsx', () => { 

    const initialValue = 10;

    test('debe de hacer match con el snapshot', () => { 

        const{ conainer } = render(<CounterApp value={ initialValue }/>);

        expect( conainer ).toMatchSnapshot();
    });


    test('debe de mostrar el valorinicial de 100 <CounterApp value={100}/>', () => { 
        render(<CounterApp value={100}/>);
        expect(screen.getByText('100') ).toBeTruthy();
        
        expect (screen.getByRole('heading',{level:2}).innerHTML).toContain('100');
    })

})