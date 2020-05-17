$(document).ready(function() {

   
    $("#memory-container").click(function() {
        $(".card").click(function(){
           $("#card-back-"+this.id).hide();
            $("#card-front-"+this.id).show();
       });
    });

   var i = 10;
$("#startButton").click(function(){
setInterval(function(){
   $("#time-remaining").html(i);
   i--;
   }, 1000);
   if (i == 0 ){
       clearInterval();
   }
   

   var numbers= ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"];
    
   function random(cards){
       return Math.floor(Math.random() * cards);
       }
 // var r = random(numbers.length);
   
   //var random= Math.floor(Math.random() * numbers.length);
//console.log(numbers[r]);
$(".card").each(function() {
    var r = random(numbers.length);
$(this).addClass(numbers[r]); 
}


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



