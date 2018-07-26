const $form = $('#suscribeForm')
const $formGroup = $form.find('.form-group')
const $formControl = $formGroup.find('.form-control')

$form.submit((ev) => {
    ev.preventDefault()

    const error = Math.random() > 0.5
    $formGroup.removeClass().addClass('form-group')
    $formControl.removeClass().addClass('form-control')
    $formGroup.addClass(error ? 'has-danger' : 'has-success')
    $formControl.addClass(error ? 'form-control-danger' : 'form-control-success')
    $formGroup.find('form-control-feedback').remove()
    var el;
    if (error) {
        el = $('<div>', { html: '¡Upss ha ocurrido un error! <i class="fa fa-exclamation-triangle"></i>' })
    } else {
        el = $('<div>', { html: 'Te enviaremos todas las novedades. <i class="fa fa-check"></i>' })
    }

    el.addClass('form-control-feedback')
    $formGroup.append(el)
})

function mostrarModal() {
    const noMostrarModal = JSON.parse(localStorage.noMostrarModal)
    if (!noMostrarModal) {
        $('#modalOferta').modal()
    }
    $('#btnNoRegistrar').click((ev) => {
        localStorage.noMostrarModal = true
    })
}