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
  let selectedCard = [];
  let matchedCard = [];
 
  selectCard();
  flipcards();

  //match clicked card//

  function selectCard(robotimg) {
    //add selected card to selectedCard
    selectedCard.push(robotimg);
    // check 2 open cards
    if (selectedCard.length == 2) {
      // is it a match
      if (selectedCard[0].find(".img").attr("src") === selectedCard[1].find(".img").attr("src"));
      
        match(); // check match function
        console.log("matched!");
      
        // if not a match
       } else {
        noMatchedCard();
        console.log("not matched");
      
    }
   
  }

  function match() {
       if ($(".match").length == 2) {
         $(".card").removeClass("card flipped").addclass("card");
         $(this).toggleClass("card flipped");
          
       }
  /*  // set time to check if card match within 3 sek
       setTimeout(function () {
      selectedCard = [];
      }, 1500);*/
       
  }
    //match();
   checkWinGame();
  //game won if all cards are found in pairs
  function checkWinGame() {
    if ($(".match").length == 12) {
      alert(Yey, Congratulations);
      restart();
    }
  }

  // no matching cards
  function noMatchedCard() {
    //reset cards after 3 s
    setTimeout(function () {
      selectedCard.forEach(() => 
      $(".card").removeClass("card flipped").addClass("card")
      );
      //emty/reset openCards array
      selectedCard = [];
       }, 3000);
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
    }
    $(".card-front").each(function (index) {
      $(this).attr("src", imagesRoot + robotimg[index]);
    });
    console.log(robotimg);
    //return shuffle(robotimg);
  }
  shuffle(robotimg);

  //count the flips
  function flipcards() {
    let flipCounter = 1;
    $(".card").click(function () {
      $(this).each(function () {
        $("#flips").html(flipCounter++);
      });
    });
  }

    function restart() {
     flipCounter = 0;
    }

  $(".card").click(function () {
    if (!$(this).hasClass("card flipped") && selectedCard.length !== 2) {
      $(this).addClass("card flipped");
      $(this > ".card-back").hide(); //child of
       selectCard($(this));
    }
   
  });

  flipcards();

  //start the timer and shuffle cards on start button
  $("#startButton").on("click", function () {
    count();
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

   // function stopCountdown() {
   // clearInterval();
  //}
});
