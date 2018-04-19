const http = require('http');
const path = require('path');

const express = require('express');
const socketio = require('socket.io');

const mongoose = require('mongoose');

const app = express();
const server = http.createServer(app);
const io = socketio.listen(server);
//Conexion con BD
mongoose.connect('mongodb://localhost/chat-db')
    .then(db => console.log('BD esta conectada'))
    .catch(err => console.log(err));
//Configuracion de puerto automatico o por defecto
app.set('port', process.env.PORT || 3000)

//Web Sockets
require('./sockets')(io);

//Archivos Estaticos
app.use(express.static(path.join(__dirname, 'public')));

//Iniciando el servidor
server.listen(app.get('port'), () => {
    console.log('Servidor en el puerto ', app.get('port'));
});