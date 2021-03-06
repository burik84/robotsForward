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

$(function() {
    // при нажатии на кнопку scrollup
    $('.scrollup').click(function() {
        // переместиться в верхнюю часть страницы
        $("html, body").animate({
            scrollTop: 0
        }, 1000);
    })
})
// при прокрутке окна (window)
$(window).scroll(function() {
    // если пользователь прокрутил страницу более чем на 200px
    if ($(this).scrollTop() > 250) {
        // то сделать кнопку scrollup видимой
        $('.scrollup').fadeIn();
    }
    // иначе скрыть кнопку scrollup
    else {
        $('.scrollup').fadeOut();
    }
});

// Плавная прокрутка к якорю из меню в header
$(function() {
    $("header a[href^='#']").click(function() {
        var _href = $(this).attr("href");
        $("html, body").animate({
            scrollTop: $(_href).offset().top + "px"
        });
        return false;
    });
});
// показ прелоадера перед загрузкой страницы
$(window).on('load', function() {
    $('.preloader').delay(1000).fadeOut('slow');
});