$(document).ready(function () {
    cardClick();
   // matchCards();

    function cardClick() {
        $(".card").click(function () {
            $(this).addClass(".card flipped");
           // setTimeout(function() {
              //  matchCards();
           // }//, 500);
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
   };
   let images = ["wheel-robot.png","dog-robot.png","flying-robot.png","excited-robot.png","invader-zim-robot.png","vector-robot.png"]; 
   let shuffleImages = shuffle(images);
   let card_images = $(".card-front");    
    count();
    for(i = 0;i < card_images.length;i++){
        card_images[i].src = `assets/images/${shuffleImages[i]}`
    }
    return shuffleImages;
    });


    //match clicked card//
   /* function matchCards() {
     if($(".card").length == 2) {
    
    
    let firstCard = $(".card").first().data(".card").val();
    let secondCard = $(".card").last().data(".card").val();

    if (firstCard == secondCard){
        $(".selected").addClass("match");
        //checkWinGame();
    } else {
        
    }
    
    }
    
    }   
    function checkWinGame(){
        if($(".match").length == 12) {
            stopCountdown();
            //modal you won
        }
    }
});*/


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