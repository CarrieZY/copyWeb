  $(function () {
  	$(".i1").hover(function(){
  		$(".i1-box").show();
  	},function(){
  		$(".i1-box").hide();
  	})
  	$(".i2").hover(function(){
  		$(".i2-div").show();
  	},function(){
  		$(".i2-div").hide();
  	})
  	$(".i3").hover(function(){
  		$(".i3-div").show();
  	},function(){
  		$(".i3-div").hide();
  	})
  	$(".i4").hover(function(){
  		$(".i4-div").show();
  	},function(){
  		$(".i4-div").hide();
  	})
  		$(".i5").hover(function(){
  		$(".i5-div").show();
  	},function(){
  		$(".i5-div").hide();
  	})
            
            $(".qq").hover(function () {
                $(".weibo").show();
            }, function () {
                $(".weibo").hide();
            })
            $(".qq").hover(function(){
            	$(".weixin").show();
            	
            },function(){
            	$(".weixin").hide();
            })
              $(".up").hover(function(){
            	$(".up-div").show();
            	
            },function(){
            	$(".up-div").hide();
            })
              $(".app").hover(function(){
              	$("#app").show();
              },function(){
              	$("#app").hide();
              })
              $(".left-li").hover(function(){
              	$(".genduo").show();
              },function(){
              	$(".genduo").hide();
              })
            // 鼠标移动到隐藏的div上的时候隐藏 div不会被隐藏
            $(".weibo").hover(function () {
                $(".weibo").show();
            }, function () {
                $(".weibo").hide();
            })
            $(".weixin").hover(function () {
                $(".weixin").show();
            }, function () {
                $(".weixin").hide();
            })
            $(".up-div").hover(function () {
                $(".up-div").show();
            }, function () {
                $(".up-div").hide();
            })
            $(".genduo").hover(function(){
            	$(".genduo").show();
            },function(){
            	$(".genduo").hide();
            })
            
        });

//轮播图
$(function(){
      var size=$(".img li").size();
        for (var i = 1; i <= size; i++) {
            var li="<li>"+i+"</li>";
            $(".num").append(li);
        };

        //手动控制轮播效果
        $(".img li").eq(0).show();
        $(".num li").eq(0).addClass("active");
        $(".num li").mouseover(function() {
            $(this).addClass("active").siblings().removeClass("active");
            var index = $(this).index();
            i=index;
            $(".img li").eq(index).fadeIn(300).siblings().fadeOut(300);
        })

        //自动
        var i = 0;
        var t = setInterval(move, 1500);
        //核心向左的函数
        function moveLeft() {
            i--;
            if (i == -1) {
                  i = size-1;
            }
            $(".num li").eq(i).addClass("active").siblings().removeClass("active");
            $(".img li").eq(i).fadeIn(300).siblings().fadeOut(300);

        }
        //核心向右的函数
        function move() {
            i++;
            if (i == size) {
                i = 0;
            }
            $(".num li").eq(i).addClass("active").siblings().removeClass("active");
            $(".img li").eq(i).fadeIn(300).siblings().fadeOut(300);

        }
        //定时器的开始与结束
        $(".banna").hover(function() {
            clearInterval(t);
        }, function() {
            t = setInterval(move, 1500)
        })
        //左边按钮的点击事件
        $(".banna .prev").click(function() {
            moveLeft();
            
        })
        //右边按钮的点击事件
        $(".banna .next").click(function() {
            move();
        })
			
})
//选项卡切换效果       
$(function(){
				$(".w3live h2 a").each(function(index){
					//带参数遍历各个选项卡
					$(this).click(function(){//注册每个选项卡的单击事件
						//移除已选中的样式
						$(".w3live h2 a").removeClass("on");
						$(this).addClass("on");//增加当前选项卡的样式
						$(".live").eq($(".w3live h2 a").index(this)).addClass("cur").siblings().removeClass('cur')
						//显示对应的内容并隐藏没选中的内容
					})
				})
			})
//warp4的选项卡切换
$(function(){
	$(".w4-top h2 a").each(function(index){
		$(this).click(function(){
			$(".w4-top h2 a").removeClass("open");
			$(this).addClass("open");
			$(".w4-content-ul").eq($(".w4-top h2 a").index(this)).addClass("show").siblings().removeClass('show')
		})
		
	})
})
//返回顶部的按钮
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
    }  
    $(window).scroll(function(){  
        if($(window).scrollTop() > 100){  
            $btn.fadeIn(600);  
        }else{  
            $btn.fadeOut(600);  
        }  
    });  
});  
//显示隐藏
$(function(){
	$(".navlist-a").hover(function(){
		$(".nav-list").slideDown();
	},function(){
		$(".nav-list").slideUp();
	})
})
//菜谱页面左右轮播图片

//社区页面里的左右轮播切换

//









