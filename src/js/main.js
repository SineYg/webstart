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
});