/**
 * common.js
 */

// 스크롤 시 div부드럽게 올라오기
$(function(){
	var $window = $(window);
	function anime(){
		var offset=$window.scrollTop()+$window.height();
		if ($('.animatable').length<0){
			$window.off('scroll',anime);
		}
		$('.animatable').each(function(i) {
			var $animatable=$(this);
			if ($animatable.offset().top+($animatable.height()/2)<offset) {
				$animatable.removeClass('animatable').addClass('animated');
			}
		});
	}
	$window.on('scroll', anime);
	$window.trigger('scroll');
});
// top_btn 클릭시 상단 이동
$(function(){
    $('#top_btn').click(function() {
        $("html, body").animate({scrollTop:0}, "slow");
        return false;
    });
});
// gnb와 util 메뉴 동작
$(function(){
    var i=0;
     $('.lang_wrap').hide();
     $('.sub_menu').hide();
     $('#search').hide();

    //  $('.gnb > ul > li >a').click(function(){
    //      $(this).next().stop().slideToggle();
    //  });
     $('#lang_kor').click(function(){
         $('.lang_wrap').stop().slideToggle();
     });
     $('.search').click(function(){
        if(i==1){
            $('#search').stop().slideUp();
            $('.search').css('top','0px');
            i=0;
        }else{
            $('#search').stop().slideDown();
            $('.search').css('top','30px');
            i=1;
        }
     });
});
// 메인비주얼, 스타일 슬라이드 동작
$(function(){
    $('.slide_dot').click(function(){
        var index=$('.slide_dot').index(this);
        $('.slide_dot').removeClass('active_slide');
        $('.slide_dot').eq(index).addClass('active_slide');
        $('.slide_img').removeClass('active_slide');
        $('.slide_img').eq(index).addClass('active_slide');
        $('.slide_con').removeClass('active_slide');
        $('.slide_con').eq(index).addClass('active_slide');
    });
    $('.style_list_title').mouseover(function(){
        var index=$('.style_list_title').index(this);
        $('.style_img').removeClass('active_slide');
        $('.style_img').eq(index).addClass('active_slide');       
    });
});
// 비디오 offset값에 따라 재생
$(function(){
    var winTop=0;
    var vidTop=0;
    $(window).scroll(function() {
        winTop=$(window).scrollTop();
        vidTop=$('.alton_video').offset().top-400;
        if(winTop>vidTop && winTop<vidTop+800){
            $('#alton_video').get(0).play();
        }else{
            $('#alton_video').get(0).pause();
        }
    });
});