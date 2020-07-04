$(document).ready(function () {
  cardClick();
  flipcards();

  function cardClick() {
    $(".card").click(function() {
      $(this).addClass("card flipped");
      matchCards();
    });
  }

  //start the timer and shuffle cards on start button

  $("#startButton").on("click", function () {
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
    function stopCountdown() {
      clearInterval(count);
    }

    //cards shuffle//
    function shuffle(Array) {
      let counter = Array.length;
      // While there are elements in the array
      while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);
        // Decrease counter by 1
        counter--;
        // And swap the last element with it
        let temp = Array[counter];
        Array[counter] = Array[index];
        Array[index] = temp;
      }
      return Array;
    };

     let images= [
      "wheel-robot.png",
      "dog-robot.png",
      "flying-robot.png",
      "excited-robot.png",
      "invader-zim-robot.png",
      "vector-robot.png",
      "wheel-robot.png",
      "dog-robot.png",
      "flying-robot.png",
      "excited-robot.png",
      "invader-zim-robot.png",
      "vector-robot.png",
    ];
     
  
    let shuffleImages = shuffle(Array);
    let card_images = $(".card").each(".card-front");
    count();
    for(i = 0; i < card_images.length; ++i) {
        let robotimg = card_images.eq(i).children("img");
        robotimg.attr("src", shuffleImages[i]);
    //card_images[i].src =`assets/images/${shuffleImages[i]}`; //backticks for imagesarray
    }
    //card_images.push(card_images[i], card_images[i]);
    shuffleImages.push(shuffleImages[i])
    return shuffleImages;
  });
  shuffle(images);
  
  //match clicked card//
  function matchCards() {
    console.log("got here");
    let flipped = ("flipped");
    //select card
    $(".card").each(function () {
      let firstCard = flipped[1];                        
      let secondCard = flipped[2];                       
    
      
      if ($("flipped").length == 2) {
          $(this).checkMatch(flipped);
      }

      if (firstCard == secondCard) {
        console.log("this was called");
        $(".card.flipped").addClass("match");
        $(".card.flipped").each(function () {
          //cards stays open
        });
        $(".card.flipped").removeClass("flipped");
      }
    });
  }
  //checkWinGame();

  //if not match

  /*function checkWinGame() {
    if ($(".match").length == 12) {
      stopCountdown();
      //alert you won
    }
  }*/
  //count the flips
  function flipcards() {
    let count = -0;
    $(".card").click(function () {
      $(this).each(function () {
        $("#flips").html(count++);
      });
    });
    cardClick();
  }
});
