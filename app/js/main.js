$(document).ready(function () {
    //navegação dos steps
    $('.buttons_wrap a, .box_info .back').click(function (e) { 
        e.preventDefault();
        
        if($(this).hasClass('back')) {
            if( $('.step-2').hasClass('active')){
                $('.step-2').removeClass('active');
                $('.step-1').addClass('active');
                $('.box_info').removeClass('focus');
                $('.request_forecast')[0].reset();
            }
            else {
                $('.step-3').removeClass('active');
                $('.step-2').removeClass('next').addClass('active');
            }
        }
        else {
            $(this).parents('.step').removeClass('active');
            $('.step-2').removeClass('active name lat');
            $('.step-2').addClass('active ' + $(this).attr('data-type'));
            $('.box_info').addClass('focus');
        }
    });
    //navegação pelos dias
    $('.day_forecast .item').click(function (e) { 
        e.preventDefault();
        $('.day_forecast .item').removeClass('active');
        $(this).addClass('active');
    });
});
