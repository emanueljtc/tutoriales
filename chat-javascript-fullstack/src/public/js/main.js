$(function() {
    const socket = io();

    //obteniendo elementos del DOM desde interfaz 
    const $messageForm = $('#message-form');
    const $messageBox = $('#message');
    const $chat = $('#chat');

    //obteniendo elementos del DOM desde el nicknameForm
    const $nickForm = $('#nickForm');
    const $nickError = $('#nickError');
    const $nickName = $("#nickname");

    //obteniendo elementos del DOM desde el usernames
    const $users = $('#usernames');

    $nickForm.submit(e => {
        e.preventDefault();
        socket.emit('new user', $nickName.val(), data => {
            if (data) {
                $('#nickWrap').hide();
                $('#contentWrap').show();
            } else {
                $nickError.html(`
								<div class="alert alert-danger">
									Este usuario ya existe
								</div>
							`)
            }
            $nickName.val('');
        });
    });

    // Eventos
    $messageForm.submit(e => {
        e.preventDefault();
        socket.emit('send message', $messageBox.val(), data => {
            $chat.append(`<p class="alert alert-danger">${data}</p>`)
        });
        $messageBox.val('');
    });

    socket.on('new message', data => {
        $chat.append('<b>' + data.nick + ': </b>' + data.msg + '<br/>')
    });

    socket.on('usernames', data => {
        let html = '';
        for (i = 0; i < data.length; i++) {
            html += `<p><i class="fas fa-user"></i> ${data[i]}</p>`
        }
        $users.html(html)
    });

    socket.on('msg_private', data => {
        $chat.append(`<p class="alert alert-dark"><b>${data.nick}:</b> ${data.msg}</p>`);
    });

    socket.on('load old msgs', msgs => {
        for (let i = msgs.length - 1; i >= 0; i--) {
            displayMsg(msgs[i]);
        }
    });

    function displayMsg(data) {
        $chat.append(`<p class="alert alert-dark"><b>${data.nick}:</b> ${data.msg}</p>`);
    }
})