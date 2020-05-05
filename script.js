$(document).ready(function() {

    $(".card").on("click", function(){ 
        $(this).css("active");


        });

        

    });

   /* $("#startButton").on("click", function(){
        $(".card").content();{
            $.each (this. get(), function(el) { //el reference object
                var $el = $(el);
                var $find =$el.children();

                $find.sort(function(){
                    return 0.5 - Math.random();
                });
                $el.empty ();
                $find.appendTo($el);
            });
        }

        
    });*/
});