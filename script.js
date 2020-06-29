$(document).ready(function () {
    cardClick();
    

    function cardClick() {
        $(".card").click(function () {
            $(this).addClass(".card flipped");
            setTimeout(function() {
                matchCards();
            }, 500);
        });
    };

    //start the timer and shuffle cards on start button
   
    $("#startButton").on("click", function() {
    function count() {
    let count = 10;
        let TimeOut = setInterval(function () {
            $("#time-remaining").html(count);
            count--;
            if (count === -1) {
                alert("Time's Up, Try Again!");
                clearInterval(TimeOut);
            }
        }, 1000);
     
    };
    function stopCountdown() {
        clearInterval(count);
    };

    //cards shuffle//
   /* function shuffle() {
         my_images = src="/assets/images.png";
         card_images = $(".card-front");
         for (let i= 0; i < images.lenght; i++) {
            //$("#memory-container").firstChild().appendTo(".card");
            randomNumber = Math.floor(Math.random() * images.length);
            temp = images;
            images = images[randomNumber];
            images[randomNumber] = temp;
        } 
        

        }
        
    count();
    shuffle();
    };*/

    //match clicked card//
    function matchCards() {
     if($(".card").length == 2) {
    
    
    let firstCard = $(".card").first().data(".card").val();
    let secondCard = $(".card").last().data(".card").val();

    if (firstCard == secondCard){
        $(".selected").addClass("match");
        checkWinGame();
    } else {
        $("")remove
    }
    
    }
    
    }   
    function checkWinGame(){
        if($(".match").length == 12) {
            stopCountdown();
            //modal you won
        }
    }
});


    //count the flips
    function flipcards() {
        let count = 0;
        $(".card").click(function () {
            $(this).each(function () {
                $("#flips").html(count++);
            });
            cardclick();
        });
    };
    
});