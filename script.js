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
    a: "Creed Bratton"

},
{
    q: "What is Jim and Pam's first child's name?",
    choice1: "Pippa",
    choice2: "DeeDee",
    choice3: "CeCe",
    choice4: "Phillip",
    a: "CeCe"

}, {
    q: "Question 3 goes here",
    choice1: "Choice 1",
    choice2: "Choice 2",
    choice3: "Choice 3",
    choice4: "Choice 4",
    a: "answer"
}, {
    q: "Question 4 goes here",
    choice1: "Choice 1",
    choice2: "Choice 2",
    choice3: "Choice 3",
    choice4: "Choice 4",
    a: "answer"
}, {
    q: "Question 5 goes here",
    choice1: "Choice 1",
    choice2: "Choice 2",
    choice3: "Choice 3",
    choice4: "Choice 4",
    a: "answer"
}, {
    q: "Question 6 goes here",
    choice1: "Choice 1",
    choice2: "Choice 2",
    choice3: "Choice 3",
    choice4: "Choice 4",
    a: "answer"
}, {
    q: "Question 7 goes here",
    choice1: "Choice 1",
    choice2: "Choice 2",
    choice3: "Choice 3",
    choice4: "Choice 4",
    a: "answer"
}, {
    q: "Question 8 goes here",
    choice1: "Choice 1",
    choice2: "Choice 2",
    choice3: "Choice 3",
    choice4: "Choice 4",
    a: "answer"
}, {
    q: "Question 9 goes here",
    choice1: "Choice 1",
    choice2: "Choice 2",
    choice3: "Choice 3",
    choice4: "Choice 4",
    a: "answer"
}, {
    q: "Question 10 goes here",
    choice1: "Choice 1",
    choice2: "Choice 2",
    choice3: "Choice 3",
    choice4: "Choice 4",
    a: "answer"
}, {
    q: "Question 11 goes here",
    choice1: "Choice 1",
    choice2: "Choice 2",
    choice3: "Choice 3",
    choice4: "Choice 4",
    a: "answer"
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
    }
    else {
        score++;
        console.log(score);
    }
    count++
    nextQuestion(count);

});


















