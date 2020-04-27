document.addEventListener("DOMContentLoaded",ready());

const card =document.querySelectorAll(".card")

function ready(){
    let cards = Array.from (document.getElementsByClassName("card"));

cards.forEach(card => card.addEventListener("click, flipcard"));

}
