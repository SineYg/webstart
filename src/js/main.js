new WOW().init();
$(document).ready(function(){ 
    $('#brif-form').validate({
        rulse: {
            username: {
                required: true,
                minlength: 2
            }, 
            email: {
                required: true,
                email: true
            }
        },
        messages:{
            username: {
                required: "Укажите имя"
                minlength: jQuery.validator.format("Имя не должно быть короче 2 символов")
            },
            email: "Нам нужен ваш email",
        }
    });

    $('#brif-form').on('submit', function(event) {
        event.preventDefault();
        $.ajax({
            url: 'mail.php',
            type: 'POST',
            data: $(this).serialize(),
            success: function(data) {
                $('.success').html(data + ', Ваша форма отправлена!')
            }
        });
    });
    $('#offer-form').on('submit', function(event) {
        event.preventDefault();
        $.ajax({
            url: 'mail.php',
            type: 'POST',
            data: $(this).serialize(),
            success: function(data) {
                $('.success').html(data + ', Ваша форма отправлена!')
            }
        });
    });
    $('.slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: $('.arrows__left'),
        nextArrow: $('.arrows__right'), 
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    variableWidth: true,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerPadding: '40px',
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});