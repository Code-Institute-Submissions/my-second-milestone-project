$(document).ready(function() {
    $("#memory-container").click(function() {
        $(".card").manual();
    
         
        });
    });

    
    var i = 60; 

$("#startButton").click(function(e){
   setInterval(function(){
      $("#time-remaining").html(i)
      i-- ;
      }, 1000);
    if (i === 0 ){
        clearInterval();
        alert("Time´s Up!");
    } 
          
});
    //resetTimer//
    $("#resetButton").click(function(e){
        i = 0;
});


var Image = ["wheel-robot.png","dog-robot.png","flying-robot.png","excited-robot.png","invader-zim-robot.png","vector-robot.png", "wheel-robot.png","dog-robot.png","flying-robot.png","excited-robot.png","invader-zim-robot.png","vector-robot.png"],

$(".card").attr("div",Image);





