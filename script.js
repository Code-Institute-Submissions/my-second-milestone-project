document.addEventListener("DOMContentLoaded", memoryboard ());

const card = document.querySelectorAll(".card")

//memory board//
function memoryBoard(){
    for (let i = 0; i <cards.length; i++){
        var card = document.createElement ("img");
        card.setAttribute ("src", "assets/images/gears-background.png");
        card.setAttribute("data-id", i);
            card.addEventListener("click", flipcard)
                //flipcard to the (card)//
            }
    }
        
        let overlays = Array.from(document.getElementsByClassName("overlay-text"));
        
        overlays.forEach(overlay => {
            overlay.addEventListener("click", () => {
                overlay.classList.removable("visible");//for the gamer//

            });
        });

        

