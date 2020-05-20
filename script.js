$(document).ready(function () {
  
     $(".card").click(function(){
         $(this).addclass("flipped");
        }

     
    
  
  
 /* $("#startButton").click(function (e) {
      e.preventDefault();
      ;
  })
    /*let i = 10;
    let timer = setInterval(function () {
      $("#time-remaining").html(i);
      i--;
    }, 1000);
    if (i === 0) {
      clearInterval(timer);
      return;
    }
    

    const numbers = [
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
    ];

    //loop random




    /*function random(cards) {
      return Math.floor(Math.random() * cards);
    }
    $(".card").each(function(i, number) {
        $("#memory-container").append($(".front").append());
      var r = random(numbers.length);
      $(this).addClass(numbers[r]);
    });
  });*/

  //resetTimer//
  $("#resetButton").click(function () {
    i = 30;
  });

  //flips//
  var count = 0;
  $(".card").click(function () {
    $(this).each(function () {
      $("#flips").html(count++);
    });
  });
});
