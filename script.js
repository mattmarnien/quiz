var playBtn = document.getElementById("playGame");
var question = document.getElementById("title");
var choices = document.getElementById("answerList");
var count = 0;
var div1 = document.createElement("div");
var button1 = document.createElement("button");
var div2 = document.createElement("div");
var button2 = document.createElement("button");
var div3 = document.createElement("div");
var button3 = document.createElement("button");
var div4 = document.createElement("div");
var button4 = document.createElement("button");
var buttonRetry = document.createElement("button")
var scoreForm = document.createElement("form");
var scoreInput = document.createElement("input");
var result = document.getElementById("resultText");
var timerText = document.getElementById("timer");
var timer = 60;
var score = 0;
var gameComplete = false;




var officeQuestions = [{
    q: "Who was never a manager of Dunder-Mifflin Scranton?",
    choice1: "Michael Scott",
    choice2: "Dwight Schrute",
    choice3: "Stanley Hudson",
    choice4: "Creed Bratton",
    a: "Stanley Hudson"

},
{
    q: "What is Jim and Pam's first child's name?",
    choice1: "Pippa",
    choice2: "DeeDee",
    choice3: "CeCe",
    choice4: "Phillip",
    a: "CeCe"

}, {
    q: "Michael Scott eventually marries who?",
    choice1: "Jan",
    choice2: "Angela",
    choice3: "Holly",
    choice4: "Meredith",
    a: "Holly"
}, {
    q: "What does Jim trade for a telescope at the office yard sale?",
    choice1: "A packet of miracle legumes",
    choice2: "A neon beer sign",
    choice3: "Homemade Salsa",
    choice4: "Dallas: The Board Game",
    a: "A packet of miracle legumes"
}, {
    q: "What was Oscar and Kevin's contribution to the office olympics?",
    choice1: "Dunder Ball",
    choice2: "Hate Ball",
    choice3: "Flonkerton",
    choice4: "Who can fit the most M&M's in their mouth",
    a: "Hate Ball"
}, {
    q: "According to Dwight, those who can't farm, farm ______.",
    choice1: "Beets",
    choice2: "'Worm'",
    choice3: "Corn",
    choice4: "Celery",
    a: "Celery"
}, {
    q: "Angela gets married to ______.",
    choice1: "Dwight and Andy",
    choice2: "Andy and the Senator",
    choice3: "Dwight and the Senator",
    choice4: "Dwight, Andy, and the Senator",
    a: "Dwight and the Senator"
}, {
    q: "As a prank, Jim does what to Dwight's stapler?",
    choice1: "Sells it to Kevin",
    choice2: "Hides it in the ceiling",
    choice3: "Takes it apart and gives the pieces back as christmas presents",
    choice4: "Puts it in Jello",
    a: "Puts it in Jello"
}, {
    q: "Oscar hides his romance with this character early in the show.",
    choice1: "Ryan",
    choice2: "Gil",
    choice3: "Kevin",
    choice4: "Angela",
    a: "Gil"
}, {
    q: "Kelly Kapoor works in what department?",
    choice1: "Quality Assurance",
    choice2: "Sales",
    choice3: "Human Resources",
    choice4: "Customer Service",
    a: "Customer Service"
}, {
    q: "Which actor initially replaced Michael Scott(Steve Carell) when he left the show?",
    choice1: "Ray Romano",
    choice2: "Ricky Gervais",
    choice3: "Will Ferrell",
    choice4: "John Krasinski",
    a: "Will Ferrell"
}]

function nextQuestion(i) {

    if (i < officeQuestions.length && timer !== 0) {
        question.textContent = (officeQuestions[i].q);
        button1.textContent = (officeQuestions[i].choice1);
        button2.textContent = (officeQuestions[i].choice2);
        button3.textContent = (officeQuestions[i].choice3);
        button4.textContent = (officeQuestions[i].choice4);
    }

    else if( i === (officeQuestions.length) && timer !== 0){
        gameComplete =true;
        timerText.remove();
        question.textContent = "Congratulations, you have finished the quiz with " + timer + " seconds left! Please enter your name for the high score list!";
        button1.remove();
        button2.remove();
        button3.remove();
        button4.remove();
        score = timer;
        scoreInput.setAttribute("type", "text");
        // scoreForm.setAttribute("onSubmit", "return false");
        scoreInput.setAttribute("placeholder", "Your Name Here");
        scoreInput.setAttribute("class", "col-8 offset-2");
        choices.appendChild(scoreForm);
        scoreForm.appendChild(scoreInput);
        localStorage.setItem("finalScore", score);
        


    }
    // else if (timer <= 0) {
    //     timerText.remove();
    //     question.textContent = "You have run out of time. Game over";
    //     button1.remove();
    //     button2.remove();
    //     button3.remove();
    //     button4.remove();



    // }

}



playBtn.addEventListener("click", function () {
    document.getElementById("image").remove();
    playBtn.remove();



    choices.appendChild(div1);
    div1.setAttribute("class", "row m-2");
    div1.appendChild(button1);
    button1.setAttribute("class", "btn-primary col-4 offset-1");

   ;
    div1.appendChild(button2);
    button2.setAttribute("class", "btn-warning col-4 offset-1");

    choices.appendChild(div2);
    div2.setAttribute("class", "row m-2");
    div2.appendChild(button3);
    button3.setAttribute("class", "btn-info col-4 offset-1");

   
    div2.appendChild(button4);
    button4.setAttribute("class", "btn-danger col-4 offset-1");

    question.setAttribute("style", "font-size:24px");


    nextQuestion(count);



setInterval(function(){
    timer--;
    timerText.textContent = "Time Left: " +timer;

    if (timer <= 0 && gameComplete === false){
        clearInterval();
        timerText.remove();
        question.textContent = "You have run out of time. Game over";
        button1.remove();
        button2.remove();
        button3.remove();
        button4.remove();
        buttonRetry.setAttribute("class", "btn-primary col-6 offset-3");
        buttonRetry.textContent = "Play Again?";    
        div1.appendChild(buttonRetry);
  

    }

},1000);

});




button1.addEventListener("click", function () {
    if (officeQuestions[count].choice1 !== officeQuestions[count].a) {

        
        result.textContent = "Wrong. -2 seconds."
        timer = timer -5;
    }
    else {
        
        
        result.textContent = "Correct!"
    }
    count++
    nextQuestion(count);


});

button2.addEventListener("click", function () {
    if (officeQuestions[count].choice2 !== officeQuestions[count].a) {
        
        result.textContent = "Wrong. -2 seconds."
        timer = timer -5;
        
    }
    else {
        
        result.textContent = "Correct!"

    }
    count++
    nextQuestion(count);

});
button3.addEventListener("click", function () {
    if (officeQuestions[count].choice3 !== officeQuestions[count].a) {
       
        result.textContent = "Wrong. -2 seconds."
        timer = timer -5;
    }
    else {
        
        result.textContent = "Correct!"
    }
    count++
    nextQuestion(count);

});
button4.addEventListener("click", function () {
    if (officeQuestions[count].choice4 !== officeQuestions[count].a) {
        
        result.textContent = "Wrong. -2 seconds."
        timer = timer -5;
    }
    else {
    
        result.textContent = "Correct!"
    }
    count++
    nextQuestion(count);
});

buttonRetry.addEventListener("click", function(){
    location.reload();
});

scoreForm.addEventListener("submit", function(event){
event.preventDefault();
var scoreName = scoreInput.value;
var newScore = [];
var oldScore = JSON.parse(localStorage.getItem("score"));
if (oldScore !== null){
    newScore = oldScore;
}

var newScoreObj = {
    Name: scoreName,
    Score: score
}

newScore.push(newScoreObj);
console.log(newScore);
var scoreArr = JSON.stringify(newScore);

localStorage.setItem("score", scoreArr);
location.href="highscore.html";







});

















