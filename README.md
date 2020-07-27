# Memory Game

Test your memory with this card game. Find the matching two robots images. When every card shows the robots it's done and you can compete with yourself or others to do it as fast as you can.Have fun!

## UX

  

As a developer i want to generate a simple single-player pattern-matching memory game to test the memory in a simple yet fun game. The game can be played by children and adults.

As a user i want to see a pretty and useful memory game with easy click on flip card that havent so many cards. This is so i can compete with my smaller children.

As a user i always want to see the cards in couple of rows in a square so it's easy to overlook so that is not to many cards to look at.

As a developer i want to show three rows with four card in each section . The images on the backside are to be able to be shuffled in a random way when the start button is pressed. So when they are clicked the cards flips over to reveal the image that are to be matched.

As a user i want to click and see different images and search for pairs, two cards with identical images. and it should be even number of pairs to find.

As a developer i want to have the start button to shuffle the images on the cards each time the button is clicked on. But shall not be able to be double clicked when event runs.

As a developer i want the card image only to show and stay open when two cards chosen are a match. Otherwise the flip turns over the card and hide image after half a second.

As a developer i want the game to have a timer and a flip counter to be seen clearly when you open the site, so the user can monitor there challenge to beat their own time each time they play.

As a user i want to understand the game easy to and do the game over with the cards shuffled every time i start over. So i can train my memory and have fun at the same time.

As a user i want to able to play on my laptop and my ipad och iphone.

As a developer i want to modify the game to be able to open this game on any mobile device or computer so i would do it responsive.

As a user i want to now when the game is over.

As a developer a what to have a modal to show “congratulations” when the game is won by user.

As a developer i also provide a alert if the time has run out.

A demonstration of my game looks is in a pdf that is called RobotMatch.pdf.

## Features

This game have an even amount of cards there two cards are with the exact same image on display. Flip the cards, two at the time and see if you can find matching pair in the shortest time.

### Existing Features

-   The game display 12 cards together in a square shape for easy overview.
    
-   The game have 12 cards with front Images and 12 with back images, 24 in total.
    
-   The game shows a start button high up on the page so it's easy to see for user.
    
-   When start button is pressed all the cards shuffles. It shuffle each time its pressed. The Timer starts when start button is pressed and shows the countdown from 30 seconds.
    
-   If time is up a alert will show: “Time is up” and encourage the user to try again.
    
-   The flips number shows how many times the user clicks on a card.
    
-   The cards can only be selected two at the time.
    
-   If the cards shows two of same image they stay and the games continue to all cards are matched.
    
-   If the cards don't match they turn over an hide the image.
    
-   To win the game the user have to remember the positions of the cards to find the matching pairs.
    
-   When the game is won, a alert will show “congratulations”.
    
-   For feature implementations add sound of click and winning sounds. This with a alternative button to shut of the sounds.This game can also be extended with more cards as a choice and a scoreboard for the user to see their progress. But the game is functional without them for now, but if not upgrades of game it can be boring for the user.
    

### Features Left to Implement

-   Add a choice in the beginning when the webpage shown how to add more cards to the memory game for harder challenge.
    
-   Sounds for clicking the cards, winning modal and alert messages .
    

## Technologies Used

In this project i used:

-   [Bootstrap](https://getbootstrap.com/)
    

An open source toolkit for responsiveness and developing with html, css and javascript.

-   [Google fonts](https://fonts.google.com/)
    

for text editing and style

-   [Github](https://github.com/)
    

For hosting my project repository

-   [Gitpod full template](https://github.com/Code-Institute-Org/gitpod-full-template)
    

Provided from Code Institute for us students to get an easier start for our project. The template helps with tips how to open browser with python3 and get prettier code etc..

-   [JQuery](https://jquery.com/)
    

The project uses JQuery to simplify DOM manipulation.

-   [W3C Markup Validation Service](https://validator.w3.org/)
    

My project was tested using this service for checking the syntax of HTML and CSS.

-   [Jshint](https://jshint.com/)
    

This is a tool to check errors in Javascript code.

-   [W3Schools](https://www.w3schools.com/)
    

This is a web developers site, with tutorials and references on web development languages.

-   Throughout the project i used Developer tools in Google Chrome, Microsoft Edge and Firefox to see the how the work and to see how my code worked for functionality and test of responsiveness.
    

## Testing

I needed several two-sided cards. I used memory container in the index.html file to build with grid, a board game that shows three rows and four columns with twelve cards in total. The images on the back and front are in stored in folder assets as format png. All the stylework with size, text and color i stored in style.css file.

My first problem was to get the cards laid out in rows, without falling into each other . Then to adapt the image to the back and front i had to use w3.schools examples. The problem was that I did not have the correct order on parent and child elements.

To then see the cards robots images while i worked with them i added hover action in css during testing but then changed to a flipped class in script.js file so it would be the click on cards function.

With the cards i found the trouble with to many id’s in html when i worked in javascript. The solution was that to have classes in index.html because its apply to all the cards. With the many id’s it created a conflict of reading the cards so i changed back to one class and it worked.

Every card has a back face, which has a back image of a gear. In Css the backface-visibility defaults is visible, it gets the gear image as a back face.To reveal the image on the other side i had to set the property to backface-visibility: hidden to make the card so it’s not see through.

I had considerable problems to open my work in the browser in chrome it didn't update my work in which I made many many changes in my code that became wrong and then even more wrong. What became crucial for it to work as well was position absolute in front and back card and use ms and webkit for the transform in css, so that it works in safari and chrome. I used the Developer tools by  pressing right on mouse in screen and select inspect the source. There I could also see how responsive my game was and se console.log or alert to see the working elements or any errors in my code.

Next issue was to get two functions, timer and shuffle the cards in start button. In the shuffle functions i had two problems. Attach the shuffle function to the cards and make the function work with the button. I had done to much code so i narrowed it down and used more jquery. I used a array and for loop and copied a fisher yates algorithm to shuffle the cards. And when i wrote the source of the images correctly it worked and did a return in the end of that function it worked.

The matching card problem was to find the source of the cards from index.html.

I got the length and source of the cards right, but the problem was that when i clicked a card it showed double the cards images in the console log. I thought i was something to do with that i didn't found the the children in js or had the wrong path to an element. Then i set a variable with the path to the file with the images and it turned out fine.

Next up was the flip function and it was mostly a combination of type errors,like one or two parenthesis or that i had to update or start over my browser. Then i didn't get to set the callback function in the right place. After that was the select Card function and it took a while before i saw that i had to set the variables source separated from the card equals in the if statement.

I also changed the order of variables, functions and jquery in my code so it became easier to read.

I got a bug in chrome that i didn't get to fix, i really tried. It seems that when the timer goes the whole page moves with each second.

## Deployment

I started my memory game with a setup in github. Then opened a new repository in Gitpod. I created an index.html, style.css and a script.js. The README.md file were already in the template from github. I saved my work with git add. git commit -m , and git push origin master to push my work to the master branch in github. I also have a folder on my computer with the same files as in gitpod. I could have started created them on my computer and put them in github as a start if i wanted to. The README.md is a markup text file that explain my project and it to is hosted in github. This is for the reader to understand my project and for me to implement my future thoughts for the project. All stored at the same place next to project.

My project can be locally deployed by following the link (URL) that is within the Download or Clone Button, under repository name. Then open Git Bash in your local IDE environment. In Git Bash you write git clone and add the copied URL and press Enter.

## Credits

### Content

-   The layout for this Readme.md is copied from CodeInstitute.
    

### Media

-   All the images were free and obtained from pngitem.com.
    

### Acknowledgements

-   I got inpiration from primarygames.com for the images style.
    
-   The time and flip look i got inspiration from a youtuber, Web Dev Simplified. Only for the reason i wanted to have the time and flip to follow the grid pattern.
    
-   I also used w3schools for help with some code layout.
    
-   For the fisher -Yates algorithm i copied from the community stackoverflow.com.