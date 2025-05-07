//para que sirbe las propTypes???
//?sirve para definirle el tipo a las propertypes
import PropTypes from 'prop-types';




//objeto de las props
export const FirstApp =({title, subTitle}) =>{

    if (!title){
        throw new Error('El title no existe');
        
    }


    return(
        //esto es un sinomino de un fracmento, es un agrupador de otros elentos htmlen este caso tenemos neustro nodo padre (<></>)
        //y colocamos el newMessage en el H1 para que salga Gustavo
        <> 
        <h1>{title}</h1> 
        <p>{ subTitle}</p>
        </>

    );
}

//!IMPORTANTE
//!comunicacion entre componentes props
//todo lo que definamos en el main.jsx: 
// <React.StrictMode>
//        <FirstApp title={"Hola , soy GUSTAVO"}/>
//    </React.StrictMode>
//
//?son props que estamos  mandando del componente padre al componenete hijo que es mi aplicacion FirstApp.jsx
//esto es igual a un objeto
FirstApp.PropTypes ={
    title: PropTypes.string.isRequired,//el isRequired lo hace obligatorio
    subTitle: PropTypes.number.isRequired
    
}











