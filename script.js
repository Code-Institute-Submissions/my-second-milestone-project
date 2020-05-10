$(document).ready(function(){


    /*$(".card").on("click", function(){
        $(".card-front").not("matched").click(function(){
        $(this).
        })
     });*/
var i = 1;
$("#startButton").click(function(e){
setInterval(function(){
    $("#time-remaining").html(i)

    i++;
     }, 1000 );
    if (i === 60){
        alert ("sorry, out of time");
        clearInterval(counter);
    }  
});

$(".resetButton").click(function(e){
    i = 0;
})

})

   //shuffle//
/*$("#startButton").click(function(){
    $(".memory-container").children("card");
$(".card").Math.random((Math.random()* 13) + 3);

})*/




//match cards

//win

//loose

//reset/start over




   // $(".memory-container").class("totalTime, cards");
   // $(this).each("cards");

