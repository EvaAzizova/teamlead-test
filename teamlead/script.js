$(document).ready(function () {
    $('.order-btn').on('click', function () {
        var target = $(this).data('target');
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1000);
    });

    $('#phone').on('input', function() {
        this.value = this.value.replace(/[^0-9]/g, '');
    });
});

   
    var currentReview = 0;
    var reviews = $('.review');
    var reviewCount = reviews.length;

    function showReview(index) {
        reviews.hide().eq(index).show();
    }

    setInterval(function () {
        currentReview = (currentReview + 1) % reviewCount;
        showReview(currentReview);
    }, 3000);

    
    var countdown = 30 * 60; 
    var countdownElement = $('#countdown');

    function updateCountdown() {
        var minutes = Math.floor(countdown / 60);
        var seconds = countdown % 60;
        countdownElement.text(`${minutes}:${seconds < 10 ? '0' : ''}${seconds}`);
        if (countdown > 0) {
            countdown--;
            setTimeout(updateCountdown, 1000);
        }
    }

    updateCountdown();

    
    $('#name').on('focus', function () {
        $(this).attr('placeholder', 'Пример: Иван');
    }).on('blur', function () {
        $(this).attr('placeholder', 'Ваше имя');
    });

    $('#phone').on('focus', function () {
        $(this
