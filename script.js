$(document).ready(function(){


    /*$(".card").on("click", function(){
        $(".card-front").not("matched").click(function(){
        $(this).
        })
     });*/
 //shuffle//
/*$("#startButton").click(function(){
    $("#memory-container").children();
    $("div.img").each(function(){
$(this).append("img src = \"" + Math.random(1+ Math.random()*16) + ".png\"");
})
});*/

//start time//
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



   

});



//win

//loose






  

