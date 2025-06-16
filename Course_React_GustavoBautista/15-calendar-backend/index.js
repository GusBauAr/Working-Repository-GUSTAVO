const express = require('express');


//crear el servidor de express

const app = express();


//configuracion de mi primera ruta (RUTAS)
app.get('/', (req, res)=>{
    res.json({
        ok: true
    })
})

//escuchar peticiones
app.listen(4000, ()=> {
    console.log(`servidor corriendo en puerto ${ 4000 }`)
})
//aqui mostamos un backend server