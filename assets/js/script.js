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

    // scrolling animation for nav links
    $("#projectsLink").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#projects").offset().top
        }, 1500);
    });
    $("#homeLink").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#home").offset().top
        }, 1500);
    });
    $("#contactLink").click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#contact").offset().top
        }, 1500);
    });
});