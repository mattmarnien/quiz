var playBtn = document.getElementById("playGame");
var question = document.getElementById("title");
var choices = document.getElementById("questionList");
var i = 0;


var officeQuestions = [{
    id: 1,
    q:"Question 1 goes here",
    choice1: "Michael SCott",
    choice2: "Choice 2",
    choice3: "Choice 3",
    choice4: "Choice 4",
    a: "answer"

},
{
    q:"Question 2 goes here",
    id: 2,
    choice1: "Choice 1",
    choice2: "Choice 2",
    choice3: "Choice 3",
    choice4: "Choice 4",
    a: "answer"

}, {
    id: 3,
    q:"Question 3 goes here",
    choice1: "Choice 1",
    choice2: "Choice 2",
    choice3: "Choice 3",
    choice4: "Choice 4",
    a: "answer"
}, {
    id: 4,
    q:"Question 4 goes here",
    choice1: "Choice 1",
    choice2: "Choice 2",
    choice3: "Choice 3",
    choice4: "Choice 4",
    a: "answer"
}]



playBtn.addEventListener("click", function(){
    
        if(i === 0){
        document.getElementById("image").remove();
        }
        question.textContent = (officeQuestions[i].q);
        i++;
        

        var button1 = document.createElement("Button");
        button1.textContent = (officeQuestions[i].choice1);
        choices.appendChild(button1);

}


);


