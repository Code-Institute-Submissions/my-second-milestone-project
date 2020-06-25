$(document).ready(function () {
    cardclick();
    matchcards();
    flipcards();

    //click the card
    let Images = document.getElementsByClassName(".card");// ["wheel-robot.png","dog-robot.png","flying-robot.png","excited-robot.png","invader-zim-robot.png","vector-robot.png"];
    //cardGrid = Images.concat(Images);//duplicate cards

    function cardclick() {
        $(".card").click(function () {
            $(this).addClass(".card flipped");

        });
    };

    //start the timer and shuffle cards on start button
    //let startGameButton = document.getElementById("startButton");
    let shuffle = document.getElementById(".card" + this.id);

    function startGameButton() {
        count();
    }
    function count() {
        // $("#startButton").on("click", function(e){     
        // alert(this);
        //timer start//
        e.preventDefault();
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
        for (let i = 0; i < Images.length; i++); {
            // $("#memory-container").append(".card");
            // console.log(Images[i]);
        };
        let currentIndex = Images.length, temp, randomindex;
        while (currentIndex !== 0) {
            randomindex = Mathfloor(Math.random() * currentIndex);
            currentIndex -= 1;
            temp = Images[currentIndex];
            Images[currentIndex] = Images[randomindex];
            Images[randomindex] = temp;
        }
        return Images;
    };
    
     





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