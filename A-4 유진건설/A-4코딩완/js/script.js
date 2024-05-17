$(function(){
    //슬라이드
    var i = 0

    function slide(){
        if(i<2){
            i++;
        }else{
            i=0
        }
        
        $(".slide ul li").fadeOut()
        $(".slide ul li").eq(i).fadeIn()
    }

    setInterval(slide, 3000)

    //메뉴 키보드이벤트
    $("nav>ul>li").focusin(function(){
        $(this).addClass('on')
        $(".sub, .menuBg").slideDown()
    })
    $("nav li li:last-child").focusout(function(){
        $("nav>ul>li").removeClass('on')
    })
    $("nav li:last-child li:last-child").focusout(function(){
        $(".sub, .menuBg").slideUp()
    })
    
    //메뉴
    $("nav>ul>li").mouseenter(function(){
        $(".sub, .menuBg").stop().slideDown()
    })

    $("nav>ul>li").mouseleave(function(){
        $(".sub, .menuBg").stop().slideUp()
    })
    //팝업창
    $(".pp").click(function(){
        $(".popup").show();
        return false;
    })

    $("button").click(function(){
        $(".popup").hide()
    })
})