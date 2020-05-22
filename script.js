$(document).ready(function() {
$(".card").click(function(){
    //alert("been clicked");
    $(this).addClass(".card flipped");
});

 $("#startButton").click(function() {
    let i = 10;
    let TimeOut = setInterval(function () {
      $("#time-remaining").html(i);
      i--;
      if (i === -1) {
        alert("Time's Up, Try Again!");
        clearInterval(TimeOut);
      }
    }, 1000);
  });

  /*const Images = ["wheel-robot.png","dog-robot.png","flying-robot.png","excited-robot.png","invader-zim-robot.png","vector-robot.png", "wheel-robot.png","dog-robot.png","flying-robot.png","excited-robot.png","invader-zim-robot.png","vector-robot.png"],
    
    function random() {
   
     $(".card").each(function() {
       let blend = random(Images.length);
      $(this).attr(Images[blend]);
    });
  };
  startgame();
};
  function flipCount(){
  
    var count = 0;
  $(".card").click(function () {
    $(this).each(function () {
      $("#flips").html(count++);
    });
  });
};*/
  });
