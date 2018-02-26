$(function(){
	var size=$(".img li").length;
	for(var j=0;j<=size-1;j++){
		$(".num").append("<li></li>");
	}
	$(".img li").eq(0).show();
	$(".num li").eq(0).addClass('active');
	$(".num li").hover(function(){
		$(this).addClass('active').siblings().removeClass('active');
		var index=$(this).index();
		$(".img li").eq(index).fadeIn(300).siblings().fadeOut(300);
	})
	var i=0;
	$(".prev").click(function(){
		moverleft();
	})
	$(".next").click(function(){
		moverright();
	})
	function moverright(){
		i++;
		if(i==size){
			i=0;
		}
		$(".num li").eq(i).addClass('active').siblings().removeClass('active');
		$(".img li").eq(i).fadeIn(300).siblings().fadeOut(300);
	}
	function moverleft(){
		i--;
		if(i==-1){
			i=size-1;
		}
		$(".num li").eq(i).addClass('active').siblings().removeClass('active');
		$(".img li").eq(i).fadeIn(300).siblings().fadeOut(300);
	}
	var t=setInterval(moverright,3000);
	$(".banner").hover(function(){
		clearInterval(t);
	},function(){
		t=setInterval(moverright,3000);
	})
})
$(function(){
	var clone=$(".txt li ").first().clone();
	$(".txt").append(clone);
	var size=Math.floor($(".txt li").length/3);
	var i=0;
	$(".left").click(function(){
		i++;
		if(i==size){
			$(".txt").css({left:0});
			i=1;
		}
		$(".txt li").stop().animate({left:-i*910},500);
	})
	$(".right").click(function(){
		i--;
		if(i==-1){
			$(".txt").css({left:-(size-1)*304});
			i=size-2;
		}
		$(".txt li").stop().animate({left:-i*910},500);
	})
})
$(function(){
	$(".tab li h2").each(function(index){
		$(this).click(function(){
			$(".tab .line").removeClass('cur');
			$(".tab li h2").removeClass('an');
			$(".tab .line").eq(index).addClass('cur');
			$(this).addClass('an');
		})
	})
})
$(function(){
	$(".tab1 li h2").each(function(index){
		$(this).click(function(){
			$(".tab1 .line").removeClass('cur');
			$(".tab1 li h2").removeClass('an');
			$(this).addClass('an');
			$(".tab1 .line").eq(index).addClass('cur');
		})
	})
})
$(function(){
	$(".content ul li h2").each(function(index){
		$(this).click(function(){
			$(".content .caipu").removeClass('curr');
			$(".content ul li h2").removeClass('onn');
			$(".content .caipu").eq(index).addClass('curr');
			$(this).addClass('onn');
		})
	})
})

    }  
    $(window).scroll(function(){  
        if($(window).scrollTop() > 100){  
            $btn.fadeIn(600);  
        }else{  
            $btn.fadeOut(600);  
        }  
    });  
});
$(function(){
    var $btn_top = $('.hulubo');
    $btn_top.css({
        'display':'none',
        'width':'60px',
        'height':'60px',
        'position':'fixed',
        'right':'20px',
        'bottom':'50px',
        'z-index':'999'
    });
    $("body").append($btn_top);
    $("body").on("click",".hulubo",function(){
        $("html,body").animate({scrollTop: 0},"slow");
    });
    var $btn = $(".hulubo");
    if($(window).scrollTop() > 100){
        $btn.fadeIn(600);
        $(function(){
	$(".caipu-nav ul li:last-child").hover(function(){
		$(".caipu-nav-div").slideDown();
	},function(){
		$(".caipu-nav-div").slideUp();
	})
})
$(function(){
	var nav=$(".caipu-content ul");
	var win=$(window);
	var sc=$(document);
	win.scroll(function(){
		if(sc.scrollTop()>=500){
			nav.addClass('fixednav');
			$(".navtmp").fadeIn();
		}else{
			nav.removeClass('fixednav');
			$(".navtmp").fadeOut();
		}
	})
})

$(function(){
	$(".s_footer .hide").click(function(){
		$(".s_footer").hide();
	},function(){
		$(".s_footer").show();
	})
})
$(function(){
	var nav=$(".healthy-left ul");
	var win=$(window);
	var sc=$(document);
	win.scroll(function(){
		if(sc.scrollTop()>=450){
			nav.addClass('fixde');
			$(".healthy-nav").fadeIn();
		}else{
			nav.removeClass('fixde');
			$(".healthy-nav").fadeOut();
		}
	})
})
$(function(){
	$(".healthy-left ul li h2").each(function(index){
		$(this).click(function(){
			$(".healthy-div").removeClass('showing');
			$(".healthy-left ul li h2").removeClass('on');
			$(".healthy-div").eq(index).addClass('showing');
			$(this).addClass('on');
		})
	})
})
$(function(){
	var clon=$(".shequ-banner .shequ-img li").first().clone();
	$(".shequ-banner .shequ-img").append(clon);
	var size=$(".shequ-banner .shequ-img li").length;
	var i=0;
	$(".shequ-prev").click(function(){
		i++;
		if(i==size){
			$(".shequ-img").css({left:0});
			i=1;
		}
		$(".shequ-img").stop().animate({left:-i*640},500);
	})
	$(".shequ-next").click(function(){
		i--;
		if(i==-1){
			$(".shequ-img").css({left:-(size-1)*640});
			i=size-2;
		}
		$(".shequ-img").stop().animate({left:-i*640},500);
	})
})

	var imgs=["../images/登录/sample-1.jpg","../images/登录/sample-2.jpg","../images/登录/sample-3.jpg","../images/登录/sample-4.jpg","../images/登录/sample-5.jpg"];
	var i=0;
	var size=imgs.length;
	$(document).ready(function(){
		$(".bgimgs").attr("src","..jpg");
		change();
	})
	function change(){
		if(i<size){
			  $(".bgimgs").attr("src", imgs[i++]);
			setTimeout("change()",3000);
		}
		if(i>size-1){
			i=0;
		}
	}
$(function(){
	$(".logintop .zhuce").click(function(){
		var url='zhuce.html';
		$.ajax({
			type:"post",
			url:"url",
			success:function(date){
				$(".denglu").html(date);
			}
		});
	})
})
