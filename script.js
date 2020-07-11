$(document).ready(function () {
    //cardClick();
    flipcards();
    
    let checkMatchclick = [];// checks if two cards has the same image
    let cardCheck= [];//store id array to be able to remove "flipped" class if no match

    function cardClick() {
        $(".card").click(function () {
            $(this).addClass("card flipped");
            if ($(this).find(".card").hasClass("flipped")){
                return;
            }
            $(this).find(".card").toggleClass("flipped");
            checkMatchclick.push($(this).find("img").attr("src"));
            cardCheck.push($(this).attr("id"));

            console.log("clicked");
            selectCard();
        });
    }

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
        let shuffleImages = shuffle(Array);
        console.log(shuffle(shuffleImages));
        
        for (i = 0; i < images.length; ++i) { //images to the card-front
           
         
            console.log("here");
        };
        images.push(images[i], images[i]);
        return shuffleImages;

    }
  


    //match clicked card//
    function selectCard() {
        console.log("got here");
        
    
        // add flipped class on card clicked
        // check firstcard and secondcard match in 5sec.
           let firstCard = ($(".card")[1]);
            let secondCard = ($(".card")[2]);
        
          if 
            
            
            
        checkWinGame();
    });

    function match() {
        if (firstCard == secondCard) {
                console.log("this was called");
                $(".card.flipped").addClass("match").removeClass("card.flipped");
                 }//if not match
                $(".card.flipped").removeClass(".card.flipped").cardCheck();
             }
             selectCard();
    //game over if all cards are found in pairs
    function checkWinGame() {
      if ($(".match").length == 12) {
        stopCountdown(count);
        //alert you won
      }
      
    }

    
    //count the flips
    function flipcards() {
        let count = -0;
        $(".card").click(function () {
            $(this).each(function () {
                $("#flips").html(count++);
            });
            count;
        });
        cardClick();
    }
 startGame();
});
