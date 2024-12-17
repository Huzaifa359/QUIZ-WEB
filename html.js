var questions = [
    {
        question: "Full form of HTML",
        option1: "Hypertext Markup Language",
        option2: "Hypertext Styling Language",
        option3: "Hypertext Scripting Language",
        correctAnswer: "Hypertext Markup Language",
    },
    {
        question: "How to commit in HTML?",
        option1: "//",
        option2: "/**/",
        option3:"<"+"!-- --"+">",
        correctAnswer:"<"+"!-- --"+">",
    },
    {
        question: "How many headings in  HTML?",
        option1: "<h1>",
        option2: "<h3>",
        option3:"<h6>",
        correctAnswer:"<h6>",
    },    {
        question: "who is the biggest headin in HTML",
        option1: "<h1>",
        option2: "<h2>",
        option3:"<h3>",
        correctAnswer:"<h1>",
    },    {
        question: "what character indicates the end of tag",
        option1: "<",
        option2: ">",
        option3:"/",
        correctAnswer:"/",
    },
    {
        question: "whose tag is use for line break in HTML",
        option1: "<BR>",
        option2: "<br>",
        option3:"<break>",
        correctAnswer:"<br>",
    },    {
        question: "How to make an order list HTML?",
        option1: "<ol>",
        option2: "<ul>",
        option3:"<li>",
        correctAnswer:"<ol>",
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
