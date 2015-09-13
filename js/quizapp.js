
$(document).ready(function(){


var score=0;
var currentQuestion = 0,
askingQuestion = true;





$("button").click(function(){
alert("hi");
};






var quiz = [{
  question: "What was Joey Ramone's real name?",
  choices: ["Jeffrey Ross Hyman", "John Doe", "Billy joe", "Thurston Moore"],
  correct: "Jeffrey Ross Hyman"
}, 

{
  question: "In 2002 what band ranking did Spin magazine give The Ramones?",
  choices: ["The best band of all time", "Second greatest band of all time", "100th best band of all time", "This is a trick question. The Ramones were never in Spin"]
  correct: "Second greatest band of all time"
}, 

{
  question: "Which Ramone quit the band and made a rap album?",
  choices: ["Dee Dee Ramone", "Joey Ramone", "Tony Ramone", "Tommy Ramone"],
  correct: "Dee Dee Ramone"
}, 

{
  question: "What was the song 53rd and 3rd supposedly about?",
  choices: ["A hooker Joey Ramone almost married.", "A hooker Tommy Ramone almost married.", "Dee Dee Ramone supporing his heroin habit by becoming a male prostitute.", "A club the band frequently played at.
"],
  correct: "Dee Dee Ramone supporing his heroin habit by becomning a male prostitute."
}, 

{
  question: "Who actually wrote the song 'Hungry Heart'?",
  choices: ["Billy Joe", "Bruce Springsteen", "Joe Strummer", "Joey Ramone"],
  correct: "Bruce Springsteen"
}];




function askQuestion(){

	var choices = quiz[currentQuestion].choices,
    choicesHtml = "";
}




//loop through questions
for (var i = 0; i < choices.length; i++) {
    choicesHtml += "<input type='radio' name='quiz" + currentQuestion +
      "' id='choice" + (i + 1) +
      "' value='" + choices[i] + "'>" +
      " <label for='choice" + (i + 1) + "'>" + choices[i] + "</label><br>";
  }


// load the question
  question.textContent = "Q" + (currentQuestion + 1) + ". " +
    quiz[currentQuestion].question;

  // load the choices
  choicesContainer.innerHTML = choicesHtml;




});


