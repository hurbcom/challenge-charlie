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
    //requisição da previsão do tempo
    $('.request_forecast .submit').click(function (e) { 
        e.preventDefault();
        
        var location = $(this).parents('.request_forecast').find('.input_text').val(),
        latitude =  $(this).parents('.request_forecast').find('.input_text.lat').val(),
        longitude =  $(this).parents('.request_forecast').find('.input_text.lng').val(),
        link = '';
        
        if (latitude != '' && longitude != '') {
            link = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(SELECT%20woeid%20FROM%20geo.places%20WHERE%20text%3D%22('+ latitude + ',' +longitude+')%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys';
        }
        else {
            link = 'https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22{{'+location+'}}%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys';
        }
        
        $.ajax({
            url: link, 
            success: function(result){
                if(result.query.count >= 1) {
                    $('.day_forecast').removeClass('disabled');
                    $('.steps .head_title span').text(result.query.results.channel.location.city+ ','+ result.query.results.channel.location.region);
                    $('.steps .wind .data').text(' '+(result.query.results.channel.wind.speed * 1.6).toFixed(2) + 'km/h');
                    $('.steps .humidity .data').text(' '+result.query.results.channel.atmosphere.humidity + '%');
                    $('.steps .pressure .data').text(' '+result.query.results.channel.atmosphere.pressure + ' PA');            
                    for (i = 0; i <= 2; i++) { 
                        var forecast =  ((result.query.results.channel.item.forecast[i].high - 32) / 1.8).toFixed(0);
                        $('.day_forecast .item-'+ (i+1) + ' .temperature .data').text(forecast);
                        if(forecast <= 15) {
                            $('.day_forecast .item-'+ (i+1)).addClass('cold');
                            $('.day_forecast .item-'+ (i+1)+ ' i').attr('class', 'icon-chuva');
                        }
                        else if(forecast >= 35) {
                            $('.day_forecast .item-'+ (i+1)).addClass('sun');
                            $('.day_forecast .item-'+ (i+1)+ ' i').attr('class', 'icon-sol');
                        }
                        else {
                            $('.day_forecast .item-'+ (i+1)).removeClass('sun cold');
                            $('.day_forecast .item-'+ (i+1)+ ' i').attr('class', 'icon-nuvem');
                        }
                    }
                }
                else {
                    $('.steps .head_title span').text('local não encontrado!');
                    $('.day_forecast .item').removeClass('active');
                    $('.day_forecast').addClass('disabled');
                }
            }
        });
        $('.steps .step-2').removeClass('active').addClass('next');
        $('.steps .step-3').addClass('active');
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

    // altera temperatura entre Celsius e farenheight
    $('.temperature').click(function (e) { 
        e.preventDefault();
        var num = $(this).find('.data').text();
        if($(this).hasClass('ce')){
            $(this).removeClass('ce').addClass('fe');
            $(this).find('.data').text(((num * 1.8) + 32).toFixed(0));
        }
        else {
            $(this).removeClass('fe').addClass('ce');
            $(this).find('.data').text(((num - 32) / 1.8).toFixed(0));
        }

        
    });
});
