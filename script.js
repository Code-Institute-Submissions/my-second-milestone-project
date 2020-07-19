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
  
  cardClick();
  flipcards();
  

  function cardClick() {
    $(".card").click(function() {
   
      if ($(this).hasClass("card flipped")){
          $(this).show(".card-back").removeClass("card flipped");
        $(this).addClass("card-front");
        console.log("clicked");
      } else{
           $(this).addClass("card flipped"); 
           $(this).removeClass("card-back");
      }
      return cardClick;
    });
    // selectCard();
  }

  //start the timer and shuffle cards on start button
  function startGame() {
     
    $("#startButton").on("click", function(count) {
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
       
      };
       shuffle(robotimg);
    });
    
    
   /* function stopCountdown() {
      clearInterval(count);
    }*/
    
    
    //console.log(robotimg);
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
       return robotimg; 
       
      }
        shuffle(robotimg);
        
    };

   
   
  //match clicked card//

 /* function selectCard() {
   // document.getElementsByClassName(".card");
    // $(".card").attr("src","assets/images/.png");
    // check firstcard and secondcard match in 5sec.
    let firstCard = $(".card")[1];
    let secondCard = $(".card")[2];

    if (firstCard == secondCard) {
      setTimeout(function () {
        $(".card").show("flipped").hide("card-back");
      }, 500);
      match();
    }
    checkWinGame();
  }
  selectCard();
  function match() {
    console.log("this was called");
    $(".card.flipped").addClass(".match").removeClass("card.flipped");
  } //if not match
  $(".card.flipped").removeClass(".card.flipped");

  //game over if all cards are found in pairs
  function checkWinGame() {
    if ($(".match").length == 12) {
      stopCountdown(count);
      //alert you won
    }
  }*/

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
  startGame();
});
