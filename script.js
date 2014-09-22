function fullheight() {
    var vh = $(window).height();
    $(".image").css({ "height": vh + "px" });
}
function scrolling() {
    var postitle = $(".sticky-header").offset().top;
    var heighttitle = $(".sticky-header").height();
    var plus = 20;
    var heighttitleplus = heighttitle + plus;
    var vh = $(window).height();
    var scrolled;
    var marginscroll = 60 + heighttitleplus;
    $(window).scroll(function () {
        scrolled = $(window).scrollTop();
        if (scrolled >= postitle) {
            $(".sticky-header").css({
                "position": "fixed",
                "top": "0px",
                "bottom": "auto"
            });
        }
        else {
            $(".sticky-header").css({
                "position": "absolute",
                "top": "auto",
                "bottom": "120px"
            });
        }
        if (scrolled >= (vh - heighttitleplus)) {
            $(".image").css({
                "position": "fixed",
                "top": -(vh - heighttitleplus) + "px"
            });
            $(".container").css({
                "margin-top": (vh + 60) + "px"
            });
        }
        else {
            $(".image").css({
                "position": "relative",
                "top": "auto"
            });
            $(".container").css({
                "margin-top": (60) + "px"
            });
        }
    });
}
function parallax() {
    var docheight = $(document).height();
    var scrolled;
    $(window).scroll(function () {
        scrolled = $(window).scrollTop();
        $(".image").css({
            "background-position": "50% " + ((scrolled / docheight) * 100) + "%"
        });
    });
}

$(document).ready(function () {
    fullheight();
    scrolling();
    parallax();
});
$(window).resize(function () {
    fullheight();
    scrolling();
    parallax();
});