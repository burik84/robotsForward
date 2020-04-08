// показ прелоадера перед загрузкой страницы
$(window).on('load', function() {
    $('.preloader').delay(1000).fadeOut('slow');
});