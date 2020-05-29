$(function(){
  function menu_mobile(){
    $("header nav.menu-mobile").click(function(){
       $(this).find("ul").slideToggle("slow", function(){});
       $("header nav.menu-mobile ul").click(function(e){
           e.stopPropagation();
       })
    })

  }menu_mobile();

/////////////////////////////

function animateScroll(){
  $("nav a").click(function(){
    var href= $(this).attr("href");
    var offeSetTop = $(href).offset().top;
    
    $("html,body").animate({
      "scrollTop":offeSetTop
    });
    return false;

  })
}animateScroll();







});

