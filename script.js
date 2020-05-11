$(document).ready(function(){


    /*$("#memory-container").on("click", function(){
        $("div.ul).not("matched").click(function(){
        $(this).
        })
     });*/
 //shuffle//
/*$("#startButton").click(function(){
    $("#memory-container").children();
    $("div.card").each(function(){
$(this).
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






  

