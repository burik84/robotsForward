// Используется для своих скриптов

$(function() {
    $('.collapse').on('show.bs.collapse', function() {
        $(this).prev().find('.fas').removeClass().addClass('fas fa-minus-circle');
    });
    $('.collapse').on('hide.bs.collapse', function() {
        $(this).prev().find('.fas').removeClass().addClass('fas fa-plus-circle');
    });

    new WOW({
        offset: 100,
    }).init();


    $('#myModal').on('shown.bs.modal', function() {
        $('#myInput').trigger('focus')
    });


});
// показ прелоадера перед загрузкой страницы
$(window).on('load', function() {
    $('.preloader').delay(1000).fadeOut('slow');
});