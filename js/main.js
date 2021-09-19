$('document').ready(function () {

    $('#menu_button_show').on('click', function () {
        $('aside').addClass('active');
        $('.aside_overlay').addClass('active');
    })

    $('.aside_overlay').on('click', function () {
        $('aside').removeClass('active');
        $('.aside_overlay').removeClass('active');
    })

    $('*#about').on('click', function () {
        $('html,body').animate({ scrollTop: $("#div_about").offset().top }, 'slow');
    })

    $('*#contact').on('click', function () {
        $('html,body').animate({ scrollTop: $("#div_contact").offset().top }, 'slow');
    })

})