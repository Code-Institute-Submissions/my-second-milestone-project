$(document).ready(function() {
$(".card").click(function() {
    $(this).addClass(".card flipped");
});
/*function startgame(){
$("#startButton").click(function(e) {
//alert(this);
     e.preventDefault();
   /* let i = 10;
    let TimeOut = setInterval(function() {
      $("#time-remaining").html(i);
      i--;
      if (i === -1) {
        alert("Time's Up, Try Again!");
        clearInterval(TimeOut);
      }
    }, 1000);
});*/
//});

//length of memoryboard cards//
$("#startButton").click(function(){
const Images= ["wheel-robot.png","dog-robot.png","flying-robot.png","excited-robot.png","invader-zim-robot.png","vector-robot.png", "wheel-robot.png","dog-robot.png","flying-robot.png","excited-robot.png","invader-zim-robot.png","vector-robot.png"];
function shuffle(){
let blend = Images[Math.floor(Math.random()* Images.length)];
$(".card").each(function(){
    $(this).attr(blend);
});
 
//match the cards//

};
shuffle();


   //count the flips//
/*let count = 0;
  $(".card").click(function() {
    $(this).each(function() {
      $("#flips").html(count++);
    });
})*/

});
});