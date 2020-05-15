$(document).ready(function() {
    $("#memory-container").click(function() {
        $(".card").click(function(){
            $("#card-back-"+this.id).hide();
            $("#card-front-"+this.id).show();
        });
});
   //var i = 10;
$("#startButton").click(function(){

    /*let timer= setInterval(function(){
   $("#time-remaining").html(i);
   i--;
   }, 1000);
   if (i === 0 ){
       clearInterval(timer)
     };*/
   var cardValue= [1,2,3,4,5,6,7,8,9,10,11,12],
   const randomCard = cardValue[Math.floor(Math.random()* 12 + 3)];

   $(".card").each(function(){
       $(this).attr(randomCard);
   });
     });
    
    //resetTimer//
    $("#resetButton").click(function(){
        i = 30;
    });




//flips//
var count = 0;
$(".card").click(function(){
    $(this).each(function(){
    $("#flips").html(count++);
    });
});

});




