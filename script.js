$(document).ready(function () {


    let imagesRoot = "assets/images/";
    let images = [
      "wheel-robot.png",
      "dog-robot.png",
      "flying-robot.png",
      "excited-robot.png",
      "invader-zim-robot.png",
      "vector-robot.png",
    ];

    let robotimg = images.concat(images);
    let openCards = [];
    let matchedCards = [];

    flipcards();
    
    //match clicked card//

     function selectCard(card) {
        //add selected card to openCards
         openCards.push(card)
    // check 2 open cards
    if (openCards.length === 2 ){
       // is it a match
    if (openCards[0].find("img").attr("src") === openCards[1].find("img").attr("src")) {
      match(); // check match function
      console.log("matched!")
    
    // if not a match 
    } else { 
     noMatchedCard();
     console.log("not matched");
    }
}
    //checkWinGame();
    return selectCard;
  };
  
  function match() {
   // keep cards open if match

   // set time to check if card match within 3 sek

   // keep on click on other cards

  
  //game won if all cards are found in pairs
    function checkWinGame() {
    if ($(".match").length == 12) {
      stopCountdown(count);
      //alert you won
      return checkWinGame;
    }
    cardClick();
  };
  // no matching cards
  function noMatchedCard(){
      if (images.length < = 1) {
          return;
      }


      //cards shuffle//

    function shuffle(robotimg) {
      let counter = robotimg.length,
        temp,
        index;
      // While there are elements in the array
      while (counter > 0) {
        // Pick a random index
        index = Math.floor(Math.random() * counter);
        // Decrease counter by 1
        counter--;
        // And swap the last element with it
        temp = robotimg[counter];
        robotimg[counter] = robotimg[index];
        robotimg[index] = temp;
       
      };
      $(".card-front").each(function(index){
          $(this).attr("src", imagesRoot + robotimg[index]); 
        
    });
      console.log(robotimg);
       return shuffle(robotimg); 
       };
       
    }

                                          //timer on flip 2 cards is in noMatchcard
    $(".card").click(function() {
   
      if ($(this).hasClass("card flipped") && (openCard.length !== 2)){                     //if card clicked two times it turns back
        $(this).addClass("card flipped");
        $(this).removeClass(".card-back");
        selectCard($(this));
      }
    });
     
    flipcards();
  

  //start the timer and shuffle cards on start button
    $("#startButton").on("click", function() {
      function count() {
        let count = 59;
        let TimeOut = setInterval(function () {
          $("#time-remaining").html(count);
          count--;
          if (count === -1) {
            alert("Time's Up, Try Again!");
            clearInterval(TimeOut);
          } 
        }, 1000);
       
      }
       shuffle(robotimg);  
    });
    
    function stopCountdown() {
      clearInterval(count);
    };

  //count the flips
  function flipcards() {
    let count = 1;
    $(".card").click(function () {
      $(this).each(function () {
        $("#flips").html(count++);
      });
      count;
    });
  }

});
