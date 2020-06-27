$(document).ready(function () {
    cardclick();
    matchcards();
    flipcards();

    //click the card
  // let images = ["wheel-robot.png","dog-robot.png","flying-robot.png","excited-robot.png","invader-zim-robot.png","vector-robot.png"];
    //cardGrid = Images.concat(Images);//duplicate cards

    function cardclick() {
        $(".card").click(function () {
            $(this).addClass(".card flipped");

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

    //cards shuffle//
    function shuffle() {
        let images = $(".card" + this.id).find("img").attr("src");
        for (let i= 0; i < images.length; i++); {
       
      
            randomNumber = Math.floor(Math.random() * images.length);
            temp = images;
            images = images[randomNumber];
            images[randomNumber] = temp;
            }
            return images;
        }
    count();
    shuffle();
    });
    
    //match clicked card//
    function matchcards() {
    



    };


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