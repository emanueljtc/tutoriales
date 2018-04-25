$('.btn-show-menu').on('click', function() {
    $('.page-left').addClass("page-left-II");

    setTimeout(() => {

        $(".page-rigth").addClass("page-rigth-II");
    }, 300);

});
$('.btn-close').on('click', function() {
    $(".page-rigth").removeClass("page-rigth-II");
    setTimeout(() => {
        $('.page-left').removeClass("page-left-II");
    }, 300);
})