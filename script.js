var questions = [
    {
        question: "js stands for ?",
        option1: "java script",
        option2: "ecma script",
        option3: "js script",
        correctAnswer: "java script",
    },
    {
        question: "How to commit in javascript ?",
        option1: "/*",
        option2: "/**/",
        option3:"<"+"!-- --"+">",
        correctAnswer: "/**/",
    },
    {
        question: "How to link js file  ?",
        option1: " <script src='script.js'></script>",
        option2: " <script href='script.js.js'></script>",
        option3:" <script></script>",
        correctAnswer:" <script src='script.js'></script>",
    },    {
        question: "DOM stands for",
        option1: "document object model",
        option2: "document object theory",
        option3:"DOM object model",
        correctAnswer:"document object model",
    },    {
        question: "is javascript sensitive case ?" ,
        option1: "yes",
        option2: "no",
        option3:"both",
        correctAnswer:"yes",
    },
    {
        question: "how to remove last element from an array ?",
        option1: ".push",
        option2: ".pop",
        option3:".shift",
        correctAnswer:".pop",
    },   
     {
        question: "how to add last element from an array ?",
        option1: ".push",
        option2: ".pop",
        option3:".shift",
        correctAnswer:".push",
    
    },

];

var quest = document.getElementById("question");
var option1 = document.getElementById("opt1");
var option2 = document.getElementById("opt2");
var option3 = document.getElementById("opt3");
var nextButton = document.getElementById("nxtbtn");

var index = 0;
var score= 0;
function loadQuestion() {
    quest.innerText = questions[index].question;
    option1.innerText = questions[index].option1;
    option2.innerText = questions[index].option2;
    option3.innerText = questions[index].option3;
}

function enableBtn() {
    nextButton.removeAttribute('disabled');
}

function complete() {
    var options = document.getElementsByName('answer');
    var selectedAnswer = "";
    

    for (var i = 0; i < options.length; i++) {
        if (options[i].checked) {
            selectedAnswer = options[i].nextElementSibling.innerText;
        }
    }

    if (selectedAnswer === questions[index].correctAnswer) {
        score++
        console.log('Correct Answer');
    } else {
        console.log('Wrong Answer');
    }

    index++;

    
    if (index < questions.length) {
        loadQuestion();
        document.getElementById("nxtbtn").setAttribute('disabled', 'true'); 
        resetRadioButtons(); 
    } else {
        Swal.fire({
            title: "Quiz completed",
            text: "You correct answer " + score + " out of 7" ,
            icon: "success"
          });;
        
    }
}

function resetRadioButtons() {
    var options = document.getElementsByName('answer');
    for (var i = 0; i < options.length; i++) {
        options[i].checked = false;

    }


}

loadQuestion();
