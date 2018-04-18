//CONEXION WEB SOCKET
module.exports = function(io) {
    io.on("connection", socket => {
        console.log("Nuevo Usuario Conectado");

        socket.on('send message', function(data) {
            io.sockets.emit('new message', data)
        });
    });
}