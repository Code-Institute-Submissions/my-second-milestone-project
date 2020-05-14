$(document).ready(function() {
    $("#memory-container").click(function() {
        $(".card").click(function(){
            $("#card-back-"+this.id).hide();
            $("#card-front-"+this.id).show();

        })
        
});




    


("#startButton").click(function(){
   setInterval(function(){
   var i = 30;
   $("#time-remaining").html(i);
   i--;
   }, 1000);
   if (i === 0 ){
      clearInterval("#startButton");
      alert("Time´s Up!");
    };
    var Image = [
	    "wheel-robot.png","dog-robot.png","flying-robot.png","excited-robot.png","invader-zim-robot.png","vector-robot.png", "wheel-robot.png","dog-robot.png","flying-robot.png","excited-robot.png","invader-zim-robot.png","vector-robot.png"
	    ];
    $(this).trigger(Math.floor(Math.random() * Image.length));
})

    //resetTimer//
    $("#resetButton").click(function(){
        i = 30;
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




