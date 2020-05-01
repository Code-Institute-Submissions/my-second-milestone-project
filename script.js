document.addEventListener("DOMContentloaded", ready ());

function ready(){
    let overlays = Array.from (document.getElementsByClassName ("overlay-text")); /*without array its just html*/
    let cards =Array.from (document.getElementsByClassName("card"));

    overlays.forEach(overlay =>{
        overlay.addEventListener("click", () => {
          overlay.classlist.remove ("visable");  
        })
    })

}



const card = document.querySelectorAll(".card");








card.forEach(card => {
    card.addEventListener("click", () => {

    });
});
