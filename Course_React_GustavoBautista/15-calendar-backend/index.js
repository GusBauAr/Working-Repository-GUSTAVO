const express = require('express');
require('dotenv'). config();



//crear el servidor de express

const app = express();

//directorio publico
app.use(express.static('public'));

//configuracion de mi primera ruta (RUTAS)
// app.get('/', (req, res)=>{
//     res.json({
//         ok: true
//     })
// })



//escuchar peticiones
app.listen(process.env.PORT, ()=> {
    console.log(`servidor corriendo en puerto ${ process.env.PORT }`)
})
//aqui mostamos un backend server