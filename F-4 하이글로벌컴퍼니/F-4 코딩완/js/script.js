$(function(){//문서 로딩 후 읽어라
   //슬라이드

   function slide(){
       $(".slide ul").animate({top:"-350px"},1000,function(){
           $(".slide ul").append($(".slide ul li").first())
           $(".slide ul").css({top:0})
       })
   }
   
   setInterval(slide, 3000)
   //메뉴
   $("nav>ul>li").mouseenter(function(){
       $(".sub, .bg").stop().slideDown()
   })
   $("nav>ul>li").mouseleave(function(){
       $(".sub, .bg").stop().slideUp()
   })

   //웹접근성 메뉴
   $("nav>ul>li").focusin(function(){
       $(".sub, .bg").slideDown()
       $(this).addClass('on')
   })
   $("nav li li:last-child").focusout(function(){
       $("nav>ul>li").removeClass('on')
   })
   $("nav li:last-child li:last-child").focusout(function(){
       $(".sub, .bg").slideUp()
   })
 //팝업
 $(".pp").click(function(){
   $(".popup").show();
   return false;
 })
 $(".close button").click(function(){
   $(".popup").hide();
 })

})