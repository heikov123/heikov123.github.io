$(document).ready(function(){
    $('#hom').click(function(){
    var scrollTo = $('#scrollTo');
    $('html,body').stop().animate({
    scrollTop: scrollTo.offset().top
    }, 1000);
})

    $(window).scroll(function() {    
        var scroll = $(window).scrollTop();
        if (scroll >= 600) {
            $(".navbar").addClass("navbar2");
        } else {
            $(".navbar").removeClass("navbar2");
        }  
    });
})

$(document).ready(function(){
    $('#prof').click(function(){
        var scrollTo = $('#scrollTo2');
        $('html,body').stop().animate({
            scrollTop: scrollTo.offset().top
        }, 1000);
    })
});

$(document).ready(function(){
    $('#skill').click(function(){
        var scrollTo = $('#scrollTo3');
        $('html,body').stop().animate({
           scrollTop: scrollTo.offset().top
       }, 1000);
    })
})

$(document).ready(function(){
    $('#project').click(function(){
        var scrollTo = $('#scrollTo4');
        $('html,body').stop().animate({
           scrollTop: scrollTo.offset().top
       }, 1000);
    })
})

$(document).ready(function(){
    $('#cont').click(function(){
        var scrollTo = $('#scrollTo5');
        $('html,body').stop().animate({
           scrollTop: scrollTo.offset().top
       }, 1000);
    })
})
    