const http = require('http');

const express = require('express');
const socketio = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketio.listen(server);

io.on('connection', socket => {
    console.log('Nuevo Usuario Conectado');
})


//Archivos Estaticos
app.use(express.static('public'));

//Iniciando el servidor
server.listen(3000, () => {
    console.log('Servidor en el puerto 3000');
});