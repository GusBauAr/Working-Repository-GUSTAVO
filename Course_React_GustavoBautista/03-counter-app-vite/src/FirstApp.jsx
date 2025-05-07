//objeto de las props
export const FirstApp =({title, subTitle}) =>{

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













