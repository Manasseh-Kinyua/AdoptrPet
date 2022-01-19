//animate why adopt section
$(document).ready(function(){
  /*$(".logotwo").mouseover(function(){
    $(".logohidden").toggle();
  });*/
  $("#two").mouseenter(function(){
    $(".logotwo").hide();
    $(".logohidden").show();
  });
  $("#two").mouseleave(function(){
    $(".logohidden").hide();
    $(".logotwo").show();
  });

});