$(function(){
    //슬라이드
    var i = 0;
    

    function slide(){
        if(i<2){
            i++;
        }else{
            i=0;
        }
        
        $(".slide ul").animate({left:i * -800},1000)
    }

    setInterval(slide, 3000)

    //팝업
    $('.pp').click(function(){
        $(".popup").show();
        return false;
    })
    $('.popup button').click(function(){
        $(".popup").hide();
    })
    //메뉴
    $("nav>ul>li").mouseenter(function(){
        $(this).find('.sub').stop().slideDown();
    })
    $("nav>ul>li").mouseleave(function(){
        $('.sub').stop().slideUp();
    })
    //각 2차메뉴 웹접근성메뉴
    $("nav>ul>li").focusin(function(){
        $(this).addClass('on')
        $(this).find('.sub').slideDown()
   })
    
    $('.sub a').focusin(function(){
        $(this).addClass('on')
   })
    $('.sub a').blur(function(){
        $('.sub a').removeClass('on')
   })
    
    $(".sub li:last-child>a").blur(function(){
        $('nav>ul>li').removeClass('on')
        $(".sub").slideUp()
   })
})