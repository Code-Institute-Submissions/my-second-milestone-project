$(document).ready(function() {

    $(".card").click(function() {
        $(this).trigger();
        

    });

    $("#startButton").on("click", function(){
        $(".card").content();{
            $.each (this. get(), function(index, el) { //el reference object
                var $el = $(el);
                var $find =$el.children();

                $find.sort(function(){
                    return 0.5 - Math.random();
                });
                $el.empty ();
                $find.appendTo($el);
            });
        }

        
    });
});