$(document).ready(function () {
  cardclick();
  matchcards();
  flipcards();

  //click the card
   let Images= document.getElementsByClassName(".card");// ["wheel-robot.png","dog-robot.png","flying-robot.png","excited-robot.png","invader-zim-robot.png","vector-robot.png"];
   //cardGrid = Images.concat(Images);//duplicate cards
   
  function cardclick() {
    $(".card").click(function(){
    $(this).addClass(".card flipped");
     
  });
};

  //start the timer and shuffle cards on start button
  let startGame = document.getElementById("startButton");
  function startGame() {    
  let start = 1;
  a(start);
  b(start);
  } 
  function a(count){
         $("#startButton").on("click", function(e){     
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
      return a(count);
    });
    
    
//cards shuffle//
function b(shuffle){
      for (let i = 0; i < Images.length; i++);{
         // $("#memory-container").append(".card");
     // console.log(Images[i]);
      };
       let currentIndex = Images.length, temp, randomindex;
         while(currentIndex !== 0){
             randomindex = Mathfloor(Math.random() * currentIndex);
             currentIndex -=1;
             temp = Images[currentIndex];
             Images[currentIndex] = Images[randomindex];
             Images[randomindex] = temp;
         }
         return b(shuffle);
        };
     
     };
       
  

  
  
    //match clicked card//
    
function matchcards(){

    

};


    //count the flips
function flipcards() {
    let count = 0;
    $(".card").click(function() {
      $(this).each(function() {
        $("#flips").html(count++);
      });
      cardclick();
    });
};
  
});