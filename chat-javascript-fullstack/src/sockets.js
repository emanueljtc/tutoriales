//CONEXION WEB SOCKET
module.exports = function(io) {
    let users = {};
    io.on("connection", socket => {
        console.log("Nuevo Usuario Conectado");

        socket.on('new user', (data, cb) => {
            if (data in users) {
                cb(false);
            } else {
                cb(true);
                socket.nickname = data;
                users[socket.nickname] = socket;
                updateusers();
            }
        });
        //cb = callback
        socket.on('send message', (data, cb) => {
            var msg = data.trim();
            if (msg.substr(0, 3) === '/p ') {
                msg = msg.substr(3);
                const index = msg.indexOf(' ');
                if (index !== -1) {
                    var name = msg.substring(0, index);
                    var msg = msg.substring(index + 1);
                    if (name in users) {
                        users[name].emit('msg_private', {
                            msg,
                            nick: socket.nickname
                        });
                    } else {
                        cb('¡Error! ingresa un usuario valido');
                    }

                } else {
                    cb('!Error¡ Ingresa tu mensaje por favor.')
                }
            } else {
                io.sockets.emit("new message", {
                    msg: data,
                    nick: socket.nickname
                });
            }
        });

        socket.on('disconnect', data => {
            if (!socket.nickname) return;
            delete users[socket.nickname];
            updateusers();

        })

        function updateusers() {
            io.sockets.emit("usernames", Object.keys(users));
        }
    });
}