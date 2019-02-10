/**
 * common.js
 */
$(document).on('click', 'a[href="#"]', function(e){
    e.preventDefault();
});
// 스크롤 시 div부드럽게 올라오기
$(function(){
	var $window = $(window);
	function anime(){
		var offset = $window.scrollTop() + $window.height();
		if ($('.animatable').length<0){
			$window.off('scroll',anime);
		}
		$('.animatable').each(function(i) {
			var $animatable = $(this);
			if ($animatable.offset().top + ($animatable.height()/2) < offset) {
				$animatable.removeClass('animatable').addClass('animated');
			}
		});
	}
	$window.on('scroll', anime);
	$window.trigger('scroll');
});
// top_btn 클릭시 상단 이동
$(function(){
    $('.top_btn a').on('click',function() {
        $('html, body').animate({'scrollTop' : '0'}, 1000);
    });
});
// gnb와 util 메뉴 동작
$(function(){
    var i = 0;
     $('.lang_wrap').hide();
     $('.sub_menu').hide();
     $('#search').hide();
     $('a#lang_kor').on('click',function(){
         $('.lang_wrap').stop().slideToggle();
     });
     $('a.search').on('click',function(){
        if(i == 1){
            $('#search').stop().slideUp();
            $('.search').css({'top' : '0px'});
            i = 0;
        }else{
            $('#search').stop().slideDown();
            $('.search').css({'top' : '30px'});
            i = 1;
        }
     });
     $('a#menu_bar').on('click',function(){
         $('.gnb>ul').toggleClass('on');
         $('.gnb>ul>li').toggleClass('on');
         $('.main_visual').toggleClass('on');
     });
});
// 메인비주얼, 스타일 슬라이드 동작
$(function(){
    $('.slide_dots a').on('click',function(){
        var index = $('.slide_dots a').index(this);
        $('.slide_dots a').removeClass('active_slide').eq(index).addClass('active_slide');
        $('.slide_img').removeClass('active_slide').eq(index).addClass('active_slide');
        $('.slide_con').removeClass('active_slide').eq(index).addClass('active_slide');
    });
    $('.style_list_title a').on('mouseenter',function(){
        var index = $('.style_list_title a').index(this);
        $('.style_img').removeClass('active_slide').eq(index).addClass('active_slide');       
    });
});
// 비디오 offset값에 따라 재생
$(function(){
    var winTop = 0;
    var minShow = 0;
    var maxShow = 0;
    var vidHeight = 0;
    winTop = $(window).scrollTop();
    $(window).on('scroll resize',function() {
        winTop = $(window).scrollTop();
        vidHeight = $('#alton_video').outerHeight();
        minShow = $('.alton_video').offset().top - 200;
        maxShow = $('.alton_video').offset().top + (vidHeight/2);
        console.log(winTop + '/' + minShow + '/' + maxShow);
        if(winTop>minShow && winTop<maxShow){
            $('#alton_video').get(0).play();
        }else{
            $('#alton_video').get(0).pause();
        }
    });
});

//lineup.html
$(function(){
    $('.tab').hide();
    //lineup_dot 클릭시 text복제
    $('.lineup_dots a').on('click',function() {
        $('.tab').hide();
        $('.tab_default').hide();
        var copiedText = $(this).text();
        var copiedIndex = $(this).index();
        var imgIndex = copiedIndex + 1;
        var imgHtmlContent = '<img src="../img/html/lineup_subvisual_' + imgIndex + '.jpg" alt="알톤자전거 라인업">';
        $('.lineup_img_box').html(imgHtmlContent);        
        $('.lineup_title').html(copiedText);
        $('.tab').eq(copiedIndex).show();
        if(copiedIndex === 0){
            $('.lineup_des').html('친환경 전기모터의 도움으로 보다 쉬운 주행이 가능한 자전거');
        }else if(copiedIndex === 1){
            $('.lineup_des').html('산과 험로에서 안정적인 주행이 가능한 오프로드');
        }else if(copiedIndex === 2){
            $('.lineup_des').html('일상 속 편안한 주행이 가능한 유사산악자전거형 자전거');
        }else if(copiedIndex === 3){
            $('.lineup_des').html('포장 도로에서 빠른 속도로 주행토록 설계된 자전거');
        }else if(copiedIndex === 4){
            $('.lineup_des').html('산악자전거의 안정감과 로드자전거의 속도감을 더한 일상용');
        }else if(copiedIndex === 5){
            $('.lineup_des').html('보관과 휴대가 편리한 작은 크기의 자전거');
        }else if(copiedIndex === 6){
            $('.lineup_des').html('도시인의 개성있는 라이프 스타일');
        }else if(copiedIndex === 7){
            $('.lineup_des').html('싱글 기어와 심플한 디자인의 스타일리쉬 자전거');
        }else if(copiedIndex === 8){
            $('.lineup_des').html('출퇴근과 주말 레저활동까지 가능한 생활용 자전거');
        }else if(copiedIndex === 9){
            $('.lineup_des').html('미취학 아이들을 위한 보조바퀴가 있는 자전거');
        }else if(copiedIndex === 10){
            $('.lineup_des').html('초등학생들이 타기 적합한 두 발 자전거');
        }else{
            $('.lineup_des').html('기타 자전거');
        }
    });
    $('.tab_view a.list_view_btn').on('click',function(){
        $('.grid_view_btn').removeClass('on');
        $(this).addClass('on');
        $('.tab_con').addClass('list_view');
    });
    $('.tab_view a.grid_view_btn').on('click',function(){
        $('.list_view_btn').removeClass('on');
        $(this).addClass('on');
        $('.tab_con').removeClass('list_view');
    });
    $('.tab_sort a.all_sort_btn').on('click',function(){
        $('.price_sort_btn').removeClass('on');
        $(this).addClass('on');
    });
    $('.tab_sort a.price_sort_btn').on('click',function(){
        $('.all_sort_btn').removeClass('on');
        $(this).addClass('on');
    });
});
//detail.html
$(function(){
    $('.detail_color a').on('click', function(e){
        e.preventDefault();
        var index = $(this).index();
        $('.detail_color a').removeClass('on');
        $('.detail_color a').eq(index).addClass('on');
        $('.detail_img .img').removeClass('on');
        $('.detail_img .img').eq(index).addClass('on');
    });
    $('.detail_part_view_dots a').on('click', function(){
        var index = $(this).index();
        $('.detail_part_view_dots a').removeClass('on');
        $(this).addClass('on');
        $('.detail_part_view_wrapper img').css({'display' : 'none'});
        $('.detail_part_view_wrapper img').eq(index).css({'display' : 'block'});
    });
});