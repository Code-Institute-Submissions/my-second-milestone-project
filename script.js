$(document).ready(function () {
  $("#memory-container").click(function () {
    $(".card").click(function () {
        $(this).addClass("flipped");
     
    });
  });
  const i = 10;
  $("#startButton").click(function () {
    let timer = setInterval(function () {
      $("#time-remaining").html(i);
      i--;
    }, 1000);
    if (i == 0) {
      clearInterval(timer);
    }
    timer;

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

    function random(cards) {
      return Math.floor(Math.random() * cards);
    }
    $(".front").each(function () {
      var r = random(numbers.length);
      $(this).addClass(numbers[r]);
    });
  });

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
