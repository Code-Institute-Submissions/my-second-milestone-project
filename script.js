$(document).ready(function () {
  cardclick();
  startbutton();
  shuffle();
  matchcards();
  flipcards();

  //click the card
  function cardclick() {
    $(".card").click(function(){
    $(this).addClass(".card flipped");
  });
}

  //start the timer and shuffle cards on start button
  function startbutton() {
    $("#startButton").click(shuffle, function (e) {
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
      
    });
    
  };

//cards shuffle//
/*function shuffle() {
    $(".card").each(card => {
        let randomImages = Math.floor(Math.random() * 12 +1);
        card.style.order = randomImages;
    });
   /* const Images= ["wheel-robot.png","dog-robot.png","flying-robot.png","excited-robot.png","invader-zim-robot.png","vector-robot.png"];
      for (let i = 0; i < Images.length; i++) {
        let randomImages= Math.floor(Math.random() * Images.length);*/
    
 //};
        
   

    
    //match clicked card//
    
function matchcards(){
    

}


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