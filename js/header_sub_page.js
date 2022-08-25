headerHeight = $('header').innerHeight();
let subHeaderBG = $('.sub-header__bg').height();

// 스크롤 (모바일/pc)
$( window ).scroll( function() {
    changeHeaderImg()
});

function changeHeaderImg(){
    let subNav = $('.sub-header__tab-wrap')
    // 스크롤탑이 헤더 높이보다 내려갔으면 (영상/이미지 구간이면) 로고를 흰색으로 변경
    if ($(window).scrollTop() >= headerHeight) {
        $('.header').addClass('white');
        $('.header__logo-img').attr('src','./img/logo-white.png');

        // 이미지(영상) 구간을 넘긴 경우 로고를 블랙(기본) 변경 + 서브 페이지 내비게이션 고정
        if ( $(window).scrollTop() > subHeaderBG ){
            $('.header').removeClass('white');
            $('.header__logo-img').attr('src','/img/logo.png');
            subNav.addClass('fixed').addClass('scrolled')
        }
        else{
            subNav.removeClass('fixed').addClass('scrolled')
        }
    }
    // 스크롤탑이 헤더 높이보다 높음
    else{
        $('.header').removeClass('white');
        $('.header__logo-img').attr('src','/img/logo.png')
    }
}
