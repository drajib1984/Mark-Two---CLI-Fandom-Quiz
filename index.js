// Make a game => ask questions, make a function and arraylist of questions
// Diplay the highest score & player score

var readLineSynce = require("readline-sync");
var score = 0;

function welcomeUser(){
var userName = readLineSynce.question("Enter your name: ");
console.log("Welcome "+userName+", Lets play a quiz on Indian History. Enter the option that you think correct");
}

var questionList = [
  {
    question : "What is the number of states in India?\na. 14\nb. 16\nc. 25\nd. 28 ",
    answer : "d"
  },
  {
    question : "When was Burma was separated from India?\na. 1948\nb. 1901\nc. 1937\nd. 1945 ",
    answer : "c"
  },
  {
    question : "When did India become a republic?\na. 1950\nb. 1947\nc. 1949\nd. 1961 ",
    answer : "a"
  },
  {
    question : "Which state was known as North East Frontier Agency?\na. Mizoram\nb. Arunachal Pradesh\nc. Manipur\nd. Tripura ",
    answer : "b"
  },
  {
   question : "Which state or union territory has French as an official language?\na. Goa\nb. Lakshadweep\nc. Pondicherry\nd. Diu and Daman ",
    answer : "c"
  }
]

function checkAnswer(question, answer){
  var userAnswer = readLineSynce.question(question);

  if(userAnswer==answer){
    console.log("Hooray !! You are right");
    score +=2; 
  }
  else{
    console.log ("Sorry !! It's a wrong answer");
    console.log("Correct answer is :"+answer);
    score--;
  }
}

function playQuiz(){
for(var i =0; i<questionList.length; i++){
  var currentQuestion = questionList[i];
  checkAnswer(currentQuestion.question,currentQuestion.answer);
}
}
var winnersList = [
   {
     name  : "Ranjit", score : 10
   },
   {
     name : "Ira", score : 9
   }
]

function displayScore(){
  console.log ("Thank you for taking part in the quiz. Your final score is : "+score);
  for(var i =0; i<winnersList.length; i++){
    var currentWinner = winnersList[i];
    console.log("The highest scorer is: "+currentWinner.name+" & score is: "+currentWinner.score);
  }
  console.log("If you meet the highest score, send me a screenshot");
}

welcomeUser();
playQuiz();
displayScore();



