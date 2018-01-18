$(function(){
	$("#nav_list>li:not(:last)").on("click",function(){
		$(this).addClass("active").siblings().removeClass("active");
	});

	$("#nav_list>li:not(:last)").hover(function(){
		$(this).addClass("hover_active");
	},function(){
		$(this).removeClass("hover_active")
	});

	$("#product .pro_item:not(.pro_item0)").hover(function(){
		$(this).find(".pro_mb").addClass("pro_mb_active");
	},function(){
		$(this).find(".pro_mb").removeClass("pro_mb_active");
	});

	//导航按钮
	$(".navbar-toggle").on("click",function(){
		if($(this).hasClass("close_active") == false){
			$(this).addClass("close_active");
		}else if($(this).hasClass("close_active") == true){
			$(this).removeClass("close_active");
		}
	});

	//二维码
	$("#footer").click(function(){
		$("#qq_weixin img").css("display","none");
	});
	//合作伙伴变色
	$("#bg_swiper .zzsbg").hover(function(){
		$(this).removeClass("black_white");
	},function(){
		$(this).addClass("black_white");
	});
	
});