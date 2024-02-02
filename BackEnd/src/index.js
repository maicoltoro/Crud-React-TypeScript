const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const router = express.Router();
const Ruta = require('../Metodos/Solicitudes');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/",(req,res) =>{
    res.end("Api Arriba")
})

module.exports = router;
app.use('/api/Todo', Ruta)

app.listen(5000,() =>{
    console.log("servidor en linea")
});