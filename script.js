$(document).ready(function() {
$(".card").click(function() {
    $(this).addClass(".card flipped");
});

$("#startButton").click(function(e) {
//alert(this);//
//timer start//
     e.preventDefault();
    let i = 10;
    let TimeOut = setInterval(function() {
      $("#time-remaining").html(i);
      i--;
      if (i === -1) {
        alert("Time's Up, Try Again!");
        clearInterval(TimeOut);
      }
    }, 1000);
    });


//cards loop//
$("#startButton").click(function(){
    let cards = $(".cards");
const Images= ["wheel-robot.png","dog-robot.png","flying-robot.png","excited-robot.png","invader-zim-robot.png","vector-robot.png", "wheel-robot.png","dog-robot.png","flying-robot.png","excited-robot.png","invader-zim-robot.png","vector-robot.png"];
for( let i=0; i < Images.length; i++){
  cards[i] = (Math.floor(Math.random()* Images.length));

    // console.log(cards[i]);
};
});

     //count the flips//
let count = 0;
  $(".card").click(function() {
    $(this).each(function() {
      $("#flips").html(count++);
    });
});


});



