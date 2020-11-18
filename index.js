const express = require('express');
const app = express();
const cors = require('cors');
const actores = require('./routes/actores');
const modulos = require('./routes/modulos');



app.set('port', process.env.PORT || 4001);

app.use(express.json());

//rutas
app.use('/api', actores);
app.use('/api/modulos', modulos);


//importante para conexion del front con el back
//Uso de cors
app.use(cors({origin: '*'}));
// conectar con el link de su frontend app.use(cors({origin: 'https://ppi-app.vercel.app/'}))

app.get('/',(req,res)=>{
    res.send('hola este es mi deploy')
})


app.listen(app.get('port'), ()=>{
 console.log(`Server on port ${app.get('port')}`);
})