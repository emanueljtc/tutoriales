$(function() {
    const socket = io();

    //obteniendo elementos del DOM desde interfaz 
    const $messageForm = $('#message-form');
    const $messageBox = $('#message');
    const $chat = $('#chat');

    //obteniendo elementos del DOM desde el nicknameForm
    const $nickForm = $('#nickForm');
    const $nickError = $('#nickError');
    const $nickName = $("#nickName");

    //obteniendo elementos del DOM desde el usernames
    const $users = $('#usernames');

    // Eventos
    $messageForm.submit(e => {
        e.preventDefault();
        socket.emit('send message', $messageBox.val());
        $messageBox.val('');
    });

    socket.on('new message', function(data) {
        $chat.append(data + '<br/>')
    });
})