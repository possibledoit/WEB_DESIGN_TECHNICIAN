$(function(){
   
    //슬라이드

    var t = 0;

    function slide(){
        if(t<2){
            t++;
        }else{
            t=0
        }
        

        $(".slide ul li").fadeOut()
        $(".slide ul li").eq(t).fadeIn()
    }
    
    setInterval(slide, 2000)

    
    //탭메뉴
    var i;
    $(".tabmenu>li").click(function(){
        $(".tabmenu>li").removeClass("on")
        $(this).addClass("on")

        i = $(this).index();
        console.log(i);

        $(".tabcon").hide()
        $(".tabcon").eq(i).show();

    })
    //팝업창
    $(".pp").click(function(){
        $(".popup").show();
        return false;
    })
    $("button").click(function(){
        $(".popup").hide();
    })
    
    //메뉴
    $("nav>ul>li").mouseenter(function(){
        $(this).find(".sub").stop().slideDown();
    })
    $("nav>ul>li").mouseleave(function(){
        $(".sub").stop().slideUp();
    })
    
    //웹접근성메뉴
    $("nav>ul>li>a").focusin(function(){
        $(this).parent("li").addClass("on")
        $(this).siblings(".sub").stop().slideDown()
   })
    
    $(".sub li:last-child>a").focusout(function(){
        $("nav>ul>li").removeClass("on")
        $(".sub").stop().slideUp()
   })
    
    

    
   
})