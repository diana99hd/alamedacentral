jQuery( document ).ready(function( $ ) {
    
    $('#loader').delay(400).animate({
      height:'0%',
    });
    $('body, html').css("display","block");
});

var controlador=0;
$(document).ready(function() {
    $("#sacamenu").on("click", function(){
        if(controlador == 0){
            $("#menuPanel").scrollTop();
            $( "#menuPanel" ).animate({
                left: "0px",
            }, 300);
            controlador++;
        }else{
            $( "#menuPanel" ).animate({
                left: "-300px",
            }, 300);
            controlador--;
        }
    });
    
});
function cerrarMenu(){
    $( "#menuPanel" ).animate({
            left: "-300px",
        }, 300);
    controlador--;
}





