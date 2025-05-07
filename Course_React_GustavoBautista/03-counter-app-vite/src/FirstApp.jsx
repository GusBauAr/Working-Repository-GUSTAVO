

const getResult =(a, b) =>{
    return a + b;
}

export const FirstApp =() =>{

    const newMessage = 'Gustavo'; //el newMessage esta dentro functional component

    return(
        //esto es un sinomino de un fracmento, es un agrupador de otros elentos htmlen este caso tenemos neustro nodo padre (<></>)
        //y colocamos el newMessage en el H1 para que salga Gustavo
        <> 
        <h1>{ getResult(1 , 5) }</h1> 
        <p>HOLA SOY OZZY</p>
        </>

    );
}