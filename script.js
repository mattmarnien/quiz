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
var score = 0;
console.log(score);

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

    if (i < officeQuestions.length) {
        question.textContent = (officeQuestions[i].q);
        button1.textContent = (officeQuestions[i].choice1);
        button2.textContent = (officeQuestions[i].choice2);
        button3.textContent = (officeQuestions[i].choice3);
        button4.textContent = (officeQuestions[i].choice4);
    }
    else{
        return;
    }

}



playBtn.addEventListener("click", function () {
    document.getElementById("image").remove();
    playBtn.remove();

    choices.appendChild(div1)
    div1.appendChild(button1);

    choices.appendChild(div2)
    div2.appendChild(button2);

    choices.appendChild(div3)
    div3.appendChild(button3);

    choices.appendChild(div4)
    div4.appendChild(button4);

    question.setAttribute("style", "font-size:24px");


    nextQuestion(count);

});


button1.addEventListener("click", function () {
    if (officeQuestions[count].choice1 !== officeQuestions[count].a) {
        score--;
        console.log(score);
    }
    else {
        score++;
        console.log(score);
    }
    count++
    nextQuestion(count);


});

button2.addEventListener("click", function () {
    if (officeQuestions[count].choice2 !== officeQuestions[count].a) {
        score--;
        console.log(score);
        
    }
    else {
        score++;
        console.log(score);
    }
    count++
    nextQuestion(count);

});
button3.addEventListener("click", function () {
    if (officeQuestions[count].choice3 !== officeQuestions[count].a) {
        score--;
        console.log(score);
    }
    else {
        score++;
        console.log(score);
    }
    count++
    nextQuestion(count);

});
button4.addEventListener("click", function () {
    if (officeQuestions[count].choice4 !== officeQuestions[count].a) {
        score--;
        console.log(score);
    }
    else {
        score++;
        console.log(score);
    }
    count++
    nextQuestion(count);

});


















