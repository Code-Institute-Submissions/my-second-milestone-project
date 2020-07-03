$(document).ready(function () {
     cardClick();
     flipcards();


    

    function cardClick() {
    $(".card").click(function () {
      $(this).addClass("card flipped");
      matchCards();
    
    }); 
  };

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
    function shuffle(array) {
      let counter = array.length;
      // While there are elements in the array
      while (counter > 0) {
        // Pick a random index
        let index = Math.floor(Math.random() * counter);
        // Decrease counter by 1
        counter--;
        // And swap the last element with it
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
      }
      return array;
    }
    function memoryBoard(){
    $("#memory-container").css("card-front", URL);
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
    
    let shuffleImages = shuffle(images);
    let card_images = $("card-front");
    count();
    for (i = 0; i < card_images.length; i++) {
      card_images[i].src = `assets/images/${shuffleImages[i]}`; //backticks for imagesarray
    }
    return shuffleImages;
  };
});

  //match clicked card//
 function matchCards() {
     console.log("got here")
    $(".card").each(function(){
    let flippedCards = []
    let firstCard = $("card-front").addClass("flipped").removeClass("card-back");
    let secondCard = $("card-front").addClass("flipped").removeClass("card-back");
    if (flippedCards

    if ($("card-front").length == 2){
      
    };

      if (firstCard == secondCard) {
          console.log("this was called")
        $(".card.flipped").addClass("match");
       $(".card.flipped").each(function(){
           //cards stays open
       });
       $(".card.flipped").removeClass("flipped");
       };
       });
    }
        checkWinGame();
      
    //if not match
  
  function checkWinGame() {
    if ($(".match").length == 12) {
      stopCountdown();
      //alert you won
    };
};
  //count the flips
  function flipcards() {
    let count = -0;
    $(".card").click(function () {
      $(this).each(function () {
        $("#flips").html(count++);
      });
    });
    cardClick();
  };
});
