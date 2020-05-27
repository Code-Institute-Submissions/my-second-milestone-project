$(document).ready(function () {
  cardclick();
  startbutton();
 // shuffle();
  flipcards();

  //click the card
  function cardclick() {
    $(".card").click();
    $(this).addClass(".card flipped");
  };

  //start the timer and shuffle cards on start button
  function startbutton() {
    $("#startButton").click(function (e) {
      //alert(this);//
      //timer start//
      e.preventDefault();
      let count = 10;
      let TimeOut = setInterval(function () {
        $("#time-remaining").html(count);
        count--;
        if (count === -1) {
          alert("Time's Up, Try Again!");
          clearInterval(TimeOut);
        }
      }, 1000);
      //shuffle();
    });
};

//cards loop//
 /* function shuffle() {
    $(".card").each(function(i) {
      $(this).append("assets/images" + (++i) + ".png");
      const images= ["wheel-robot.png","dog-robot.png","flying-robot.png","excited-robot.png","invader-zim-robot.png","vector-robot.png", "wheel-robot.png","dog-robot.png","flying-robot.png","excited-robot.png","invader-zim-robot.png","vector-robot.png"];
      for (let i = 0; i < images.length; i++) {
        // = Math.floor(Math.random() * images.length);
        //startbutton();
        console.log(images);
      }
    });
    };*/
    //count the flips
function flipcards() {
    let count = 0;
    $(".card").click(function() {
      $(this).each(function() {
        $("#flips").html(count++);
      });
    });
  
};
  });