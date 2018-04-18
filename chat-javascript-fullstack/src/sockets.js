//CONEXION WEB SOCKET
module.exports = function(io) {
    io.on("connection", socket => {
        console.log("Nuevo Usuario Conectado");
    });
}