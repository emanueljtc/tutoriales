$(document).foundation()

$('[data-toggle-dia]').click(function(ev) {
    const panel = $(this).data('toggleDia');
    console.log(panel)
    $('lineup-tabs').foundation('selectTab', panel);
})

const $offCanvas = $('#offCanvas')
$offCanvas.find('li').click((ev) => {
    $offCanvas.foundation('close')
})