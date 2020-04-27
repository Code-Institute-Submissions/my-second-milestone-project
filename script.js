document.addEventListener("DOMContentLoaded",ready());

function ready(){
    let cards = Array.from (document.getElementsByClassName("card"));

cards.forEach(card => card.addEventListener("click, flipcard"));

}
