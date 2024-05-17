$(function(){
    //슬라이드
    var i = 0;

    function slide(){
        if(i<2){
            i++;
        }else{
            i = 0;
        }
        $(".slide ul").animate({top:i * 300 * (-1)},1000)
    }
    
    setInterval(slide, 2000)
    //팝업
    $(".pp").click(function(){
        $(".popup").show();
        return false;
    })
    $(".popup button").click(function(){
        $(".popup").hide();
    })
   //메뉴
   $("nav>ul>li").mouseenter(function(){
    $(".sub, .bg").stop().slideDown();
   })
   $("nav>ul>li").mouseleave(function(){
    $(".sub, .bg").stop().slideUp();
   })
    
     
    //웹접근성메뉴
    $("nav>ul>li").focusin(function(){
        $(this).addClass("on")
        $(".sub,  .bg").slideDown()
   })

    $(".sub li:last-child a").focusout(function(){
        $("nav>ul>li").removeClass("on")
   })
    $("nav li:last-child li:last-child a").focusout(function(){
        $(".sub, .bg").slideUp()
   })
    

   
    
})