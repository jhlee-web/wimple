$(function(){
    getScrollTop()
    createScrollTop()
})

$(window).on('scroll', function(event){
    createScrollTop()

    if (event.originalEvent.wheelDelta > 0 || event.originalEvent.detail < 0) {
        // scroll up
        return false;
    }
    else {
        // scroll down
        $('.header').addClass('scrolled')
        
    }
    getScrollTop()
});

function createScrollTop(){
    if(document.documentElement.scrollTop>$(window).height()){
        $('#btn-top').fadeIn(200);
    }
    else{
        $('#btn-top').fadeOut(200);
    }
}



function getScrollTop(){
    let scrollTop = document.documentElement.scrollTop;
    let headerHeight = $('.header').height();

    if(scrollTop>0 || scrollTop>=headerHeight){
        $('.header').addClass('scrolled').addClass('white')
    }
}


