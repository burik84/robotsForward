// Используется для своих скриптов

$(function() {
    $('.collapse').on('show.bs.collapse', function() {
        $(this).prev().find('.fas').removeClass().addClass('fas fa-minus-circle');
    });
    $('.collapse').on('hide.bs.collapse', function() {
        $(this).prev().find('.fas').removeClass().addClass('fas fa-plus-circle');
    });
    $('#myForm').validator({
        feedback: {
            success: 'fas fa-check-circle',
            error: 'fas fa-times-circle'
        }
    });
    $('.form-select').select2({
        minimumResultsForSearch: Infinity
    });

    new WOW({
        offset: 100,
    }).init();

    $('[data-toggle="tooltip"]').tooltip({
        delay: {
            "show": 500,
            "hide": 100
        }
    });


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