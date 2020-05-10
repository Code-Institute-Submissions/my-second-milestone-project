$(document).ready(function(){


    /*$(".card").on("click", function(){
        $(".card-front").not("matched").click(function(){
        $(this).
        })
     });*/
var count = 0;
$("#startButton").click(function(){
    $("#time-remaining").html(++count);
    if (count === 0){
        alert ("sorry, out of time");
        clearInterval(counter);
    }

    },1000 );
});

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

