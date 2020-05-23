$(document).ready(function () {
    // Makes the navbar fixed to top as it is scrolled over
    document.onscroll = function() {
        if( $(window).scrollTop() > $('#home').height() + 75 ) {
            $('#nav').addClass('fixed-top');
        }
        else {
            $('#nav').removeClass('fixed-top')
        }
    };

});