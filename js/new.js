$(document).ready(function() {

    $('.js-page-slider').each(function() {
        var curSlider = $(this);
        if (curSlider.hasClass('slick-slider')) {
            curSlider.slick('unslick');
        }
        curSlider.slick({
            fade: true,
            arrows: true,
            autoplay: true,
            dots: true,
            prevArrow: '<button type="button" class="slick-prev"><svg width="16" height="30" viewBox="0 0 16 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.6022 2.53709L3.58011 15L15.6022 27.4629C16.1326 27.997 16.1326 29.0653 15.6022 29.5994C15.0718 30.1335 14.1878 30.1335 13.6575 29.5994L0.397791 16.0683C-0.132596 15.5341 -0.132596 14.4659 0.397791 13.9318L13.4807 0.400593C14.011 -0.133532 14.895 -0.133532 15.4254 0.400593C16.1326 0.934717 16.1326 1.82492 15.6022 2.53709Z" /></svg></button>',
            nextArrow: '<button type="button" class="slick-next"><svg width="17" height="30" viewBox="0 0 17 30" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.02816 27.4629L13.0503 15L1.02816 2.53709C0.497772 2.00297 0.497772 0.93472 1.02816 0.400594C1.55855 -0.13353 2.44252 -0.13353 2.97291 0.400594L16.2326 13.9317C16.763 14.4659 16.763 15.5341 16.2326 16.0682L3.14971 29.5994C2.61932 30.1335 1.73534 30.1335 1.20496 29.5994C0.497776 29.0653 0.497774 28.1751 1.02816 27.4629Z" /></svg></button>',
            autoplaySpeed: 2000,
            responsive: [
                {
                    breakpoint: 1199,
                    settings: {
                        arrows: false
                    }
                }
            ]
        });
    });

    $('#feedback-form').validate({
        ignore: '',
        submitHandler: function(form) {
            var curForm = $(form);
            curForm.addClass('loading');
            var formData = new FormData(form);

            $.ajax({
                type: 'POST',
                url: curForm.attr('action'),
                processData: false,
                contentType: false,
                dataType: 'json',
                data: formData,
                cache: false
            }).done(function(data) {
                curForm.find('.message').remove();
                if (data.status) {
                    curForm.trigger('reset');
                    curForm.prepend('<div class="message message-success">' + data.message + '</div>')
                } else {
                    curForm.prepend('<div class="message message-error">' + data.message + '</div>')
                }
                curForm.removeClass('loading');
            });
        }
    });

});