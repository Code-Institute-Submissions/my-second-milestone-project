$(document).ready(function () {
    cardClick();
    flipcards();
    
  

    function cardClick() {
        $(".card").click(function () {
          //  $(this).each(function(){
           if ($(this).addClass("card flipped").removeClass("card-back")){
            console.log(this);
        
        } else { ($(this).hasClass("card flipped"))
            $(this).removeClass("card flipped");
            $(this).addClass("card-back");
              
        };
        selectCard();
    });
        };
       

        
    //start the timer and shuffle cards on start button
    function startGame(){
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
        count();

    });
        function stopCountdown() {
            clearInterval(count);
        }
        let images = [
            "wheel-robot.png",
            "dog-robot.png",
            "flying-robot.png",
            "excited-robot.png",
            "invader-zim-robot.png",
            "vector-robot.png",
        ];

        let Array = images.concat(images);
        //cards shuffle//
        function shuffle(Array) {
            let counter = Array.length,temp, index;
            // While there are elements in the array
            while (counter > 0) {
                // Pick a random index
                index = Math.floor(Math.random() * counter);
                // Decrease counter by 1
                counter--;
                // And swap the last element with it
                temp = Array[counter];
                Array[counter] = Array[index];
                Array[index] = temp;
            }
            return Array;
            //console.log(Array);
        };
          for (i = 0; i < images.length; ++i) { 
           $("<img>").attr("src", images[i]);
            
        };
        //let shuffleImages = shuffle(Array);
        //console.log(shuffle(shuffleImages, images));
        shuffle(Array);
       
        };
       

    //match clicked card//
   
    function selectCard() {
     document.getElementsByClassName(".card");
     
     // check firstcard and secondcard match in 5sec.
           let firstCard = ($(".card")[1]);
            let secondCard = ($(".card")[2]);
        
          if (firstCard == secondCard){
              setTimeout(function(){
                  $(".card").show("flipped").hide("card-back");
              },500);
              match();
          }
            checkWinGame();
        };
       selectCard();
    function match() {
                console.log("this was called");
                $(".card.flipped").addClass(".match").removeClass("card.flipped");
                 }//if not match
                $(".card.flipped").removeClass(".card.flipped");
             
             
    //game over if all cards are found in pairs
    function checkWinGame() {
      if ($(".match").length == 12) {
        stopCountdown(count);
        //alert you won
      }
      
    };

    
    //count the flips
    function flipcards() {
        let count = -0;
        $(".card").click(function () {
            $(this).each(function () {
                $("#flips").html(count++);
            });
            count;
        });
        
    }
 startGame();
});
