document.addEventListener("DOMContentloaded", ready ());

function ready(){
    let overlays = Array.from (document.getElementsByClassName ("overlay-text")); /*without array its just html*/
    let card = Array.from (document.getElementsByClassName(".card"));

    overlays.forEach(overlay =>{
        overlay.addEventListener("click", () => {
          overlay.classlist.remove ("visable");  
        });
    });

}


const cards = document.querySelectorAll(".card");

//memory board length and add flipcard later  
//function memoryBoard(){}0-12
    
    

//function checkForMatch(){}


let flippedCard = false;
let firstCard , secondCard;

//add first and second card, witch card flips
 function flipcard () {
     if (!flippedCard) { //first card click
        flippedCard = true;
        firstCard = this; //.card
        this.classlist.add ("flip");
        console.log ({flippedCard , firstCard});
     }
    

 }
cards.forEach (card => card .addEventListener("click", flipCard));