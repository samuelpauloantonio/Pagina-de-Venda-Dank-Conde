$(function(){
	var sliders;
	var delay = 3000;
	var correntIndex = 0;
	
  function initSlider(){
      sliders = $(".sobre-autor").length;
      var sizeContainer = 100 * sliders ;
      var sizeBoxSingle = 100 / sliders;
      $(".sobre-autor").css("width", sizeBoxSingle+'%');
      $(".scroll-equipe").css("width", sizeContainer+'%');
	  

      
       for( var i =  0 ; i < sliders; i++){
        if(i < sliders){
            $(".spans").append("<span style='background : #ccc'> </span>")
        }else{
			$(".spans").append("<span></span>");
		}
		
		
       }
  }initSlider();
  
  function autoPlay(){
	  setInterval(function(){
		  correntIndex++;
		  if(correntIndex == sliders){
			  correntIndex = 0;
		  }
		  GoSlider(correntIndex);
	  },delay)
  }autoPlay();
  
  
  function GoSlider(correntIndex){
	  
	var offsetX = $(".sobre-autor").eq(correntIndex).offset().left - $(".perfil-wraper").offset().left;
	$(".spans span").css("background","#ccc");
	$(".spans span").eq(correntIndex).css("background", "#555555")
	$(".perfil-wraper").stop().animate({"scrollLeft": offsetX + 'px'});
	 
  }
});

$(window).resize(function(){
	$(".perfil-wraper").stop().animate({"scrollLeft":0});
})