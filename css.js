var questions = [
    {
        question: "CSS stands for ?",
        option1: "cascading style sheet",
        option2: "case Styling Language",
        option3: "css Scripting sheet",
        correctAnswer: "cascading style sheet",
    },
    {
        question: "How to commit in CSS",
        option1: "//",
        option2: "/**/",
        option3:"<"+"!-- --"+">",
        correctAnswer:"/**/",
    },
    {
        question: "How to link css file?",
        option1: "href=style.css",
        option2: "src= style.css",
        option3:"link= style.css",
        correctAnswer:"href=style.css",
    },    {
        question: "how to change text color by css ?",
        option1: "background-color: white",
        option2: "color:white",
        option3:"text-color:white",
        correctAnswer:"color:white",
    },    {
        question: "how to target elements by classname in css ?",
        option1: ".classname",
        option2: "#classname",
        option3:"$class name",
        correctAnswer:".classname",
    },
    {
        question: "How to target elements by id in css ? ",
        option1: ".id",
        option2: "#id",
        option3:"$id",
        correctAnswer:"#id",
    },    {
        question: "How to change background image ?",
        option1: "background-image=www.image.com",
        option2: "backgroung-image src('www.image.com')",
        option3:"background-image: url(www.image.com)",
        correctAnswer:"background-image: url(www.image.com)",
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
