$(function(){//문서로딩후 스크립트를 읽어주세요
    var t = 0;

    function slide(){
        if(t<2){
            t++;
        }else{
            t=0
        }
        
        $(".slide ul li").fadeOut();
        $(".slide ul li").eq(t).fadeIn();
    }
    
    setInterval(slide, 3000)



    $(".tabmenu>li").click(function(){
        $(".tabmenu>li").removeClass("on")
        $(this).addClass("on")

        var i= $(this).index();
        //console.log(i);
        $(".tabcon").hide();
        $(".tabcon").eq(i).show();

        return false;
    })
    //팝업
    $(".pp").click(function(){
        $(".popcon").show();
        return false;
    })
    $(".close").click(function(){
        $(".popcon").hide();
    })

    $("nav>ul>li").mouseenter(function(){
        $(".sub, .menuBg").stop().fadeIn()
    })
    $("nav>ul>li").mouseleave(function(){
        $(".sub, .menuBg").stop().fadeOut()
    })
    
    //웹접근성메뉴
    $("nav>ul>li").focusin(function(){
        $(this).addClass("on")
        $(this).find(".sub").fadeIn()
   })
        
   $(".sub li:last-child").focusout(function(){
        $('nav>ul>li').removeClass("on")
   })
    $("nav li:last-child li:last-child").focusout(function(){
        $(".sub").fadeOut()
   })
})