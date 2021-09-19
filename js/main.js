$('document').ready(function () {

    $('#menu_button_show').on('click', function () {
        $('aside').addClass('active');
        $('.aside_overlay').addClass('active');
    })

    $('.aside_overlay').on('click', function () {
        $('aside').removeClass('active');
        $('.aside_overlay').removeClass('active');
    })

})