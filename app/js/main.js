$(document).ready(function () {
    //bing image request
    $.getJSON("http://query.yahooapis.com/v1/public/yql",
    {
        q: 'select * from json where url="https://www.bing.com/HPImageArchive.aspx?format=js&idx=0&n=1&mkt=pt-BR"',
        format: "json"
    },
    function(data){
        if (data.query.results) {
            var image_target = data.query.results.json.images.url,
                copyright = data.query.results.json.images.copyright;
            console.log(data.query.results.json.images);
            $('.weather_forecast .media').html('<img src="https://www.bing.com' + image_target + '"  alt="'+copyright+'"/>');
        } else {
            $('.weather_forecast .media').html('<h2>Falha na requisição</h2>');
        }
        
    });
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
