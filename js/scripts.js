$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        navText: [ '', ' ' ],

        responsive:{
            0:{
                items:1
            },

            1000:{
                items:1
            }
        }
    });
});
$(document).ready(function(){
    $("#menu-yak").on("click","a", function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});

(function($) {
    $(function() {

        $('#up').click(function() {
            $('body,html').animate({scrollTop:0},500);
            return false;
        })

    })
})(jQuery)