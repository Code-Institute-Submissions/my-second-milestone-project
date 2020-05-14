$(document).ready(function() {
    $("#memory-container").click(function() {
        $(".card").manual().each();
});




    
/*onclick="Display1(); Display2()";

$("#startButton").onclick(function(){
   setInterval(function(){
       var i = 30;
      $("#time-remaining").html(i)
      i--;
       }, 1000);
    if (i === 0 ){
        clearInterval("#startButton");
        alert("Time´s Up!");
        };
          
});
    //resetTimer//
    $("#resetButton").click(function(e){
        i = 30;
});*/


var Image = ["wheel-robot.png","dog-robot.png","flying-robot.png","excited-robot.png","invader-zim-robot.png","vector-robot.png", "wheel-robot.png","dog-robot.png","flying-robot.png","excited-robot.png","invader-zim-robot.png","vector-robot.png"];
$("#startButton").click(function(){
$(".card").select();
$(this).trigger(Math.floor(Math.random() * Image.length));

});

//flips//
var count = 0;
$(".card").click(function(e){
    $(this).each(function(){
    $("#flips").html(count++);
    });
});
$("#resetButton").click(function(e){

}); 


});




