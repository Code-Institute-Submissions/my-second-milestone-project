$(document).ready(function () {
  cardclick();
  matchcards();
  flipcards();

  //click the card
  function cardclick() {
    $(".card").click(function(){
    $(this).addClass(".card flipped");
    console.log(cardclick);
  });
};

  //start the timer and shuffle cards on start button
 /* function startGame() {
      let starter = 1;

      startButton(starter);
      shuffle(starter);
  }
  function startButton() {
    $("#startButton").onclick(e) 
     // alert(this);
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
      shuffle();
    };

    
    
//cards shuffle//
function shuffle() {
      const Images= ["wheel-robot.png","dog-robot.png","flying-robot.png","excited-robot.png","invader-zim-robot.png","vector-robot.png"];
    // let cardGrid = Images.concat(Images);//duplicate cards
     //document.getElementsByClassName(".card-front");
     console.log(Images);
     startButton();
        
    };
     
startGame(starter);*/


    //match clicked card//
    
function matchcards(){

    

};


    //count the flips
function flipcards() {
    let count = 0;
    $(".card").click(function() {
      $(this).each(function() {
        $("#flips").html(count++);
      });
      cardclick();
    });
}
  }
});