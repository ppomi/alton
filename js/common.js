/**
 * common.js
 */

 $(function(){
    var i=0;
     $('.lang_wrap').hide();
     $('.sub_menu').hide();
     $('#search').hide();

     $('.gnb > ul > li >a').click(function(){
         $(this).next().stop().slideToggle();
     });
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

 $(function() {
	var $window = $(window);
	function doAnimations(){
		var offset=$window.scrollTop()+$window.height();
		var $animatables=$('.animatable');
		if ($animatables.length<0){
			$window.off('scroll',doAnimations);
		}
		$animatables.each(function(i) {
			var $animatable=$(this);
			if ($animatable.offset().top+($animatable.height()/2)<offset) {
				$animatable.removeClass('animatable').addClass('animated');
			}
		});
	}
	$window.on("scroll", doAnimations);
	$window.trigger("scroll");
 });