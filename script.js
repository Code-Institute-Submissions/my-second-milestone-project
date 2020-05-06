$(document).ready(function() {

    
    $(".card").on("click", function(){ 
        $(".card-front").show (2000);
        console.log ("done");
    
 });
 


        

    
    


   /* $("#startButton").on("click", function(){ 
        $(".card").find(".card-front");
        for (let i = this.card.length -1; i > 0; i--){
            let randIndex = Math.floor(Math.random() * (i + 1));//rounding down
            this.card [randIndex].style.order = i; // order property check algorithm
            this.card [i].style.order = randIndex;
        }
        
        });*/
    }); 
