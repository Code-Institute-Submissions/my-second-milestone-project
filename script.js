document.addEventListener("DOMContentLoaded", memoryboard ())

const card = document.querySelectorAll(".card")

//memory board//
function memoryBoard(){
    for (let i = 0; i <cards.length; i++){
        var card = document.createElement ("img");
        card.setAttribute ("src", "assets/images/gears-background.png");
        card.setAttribute("data-id", i);
        let overlays = Array.from(document.getElementsByClassName("overlay-text"));
        let cards = Array.from (document.getElementsByClassName("card"));
        
        
        overlays.forEach(overlay => {
            overlay.addEventListener("click", () => {
                overlay.classList.removable("visable");//for the gamer//

            });
        });

        cards.forEach(card => {
            card.addEventListener("click",() => {
                //flipcard to the (card)//
            });
    });
}




