$(document).ready(function(){ 
    $('#offer-form').on('submit', function(event) {
        event.preventDefault();
        $.ajax({
            url: 'mail.php',
            type: 'POST',
            data: $(this).serialize(),
            success: function(data) {
                console.log(data);
            }
        });
    });
});