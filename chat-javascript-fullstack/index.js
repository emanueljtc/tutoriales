const express = require('express');
const socketio = require('socket.io');
const app = express();



app.use(express.static('public'));

app.listen(3000, () => {
    console.log('Servidor en el puerto 3000');
});