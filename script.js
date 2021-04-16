
//frontend javaScript
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "30px 10px";
    document.getElementById("logo").style.fontSize = "25px";
  } else {
    document.getElementById("navbar").style.padding = "80px 10px";
    document.getElementById("logo").style.fontSize = "35px";
  }
}

function visitQandAPage(){
  window.location="questionsAndAnswers.html";
}
function visitIndex(){
  window.location="index.html";
}
function visitHomePage(){
  window.location="home.html";
}
function visitHelpPage(){
  window.location="help.html";
}
//end of Frontend Java Script

//storage for questions page w Firebase

function submitQuestion(e){
  e.preventDefault();

  console.log(123); // test
}
var temp = document.getElementById('questions') //lol why isnt this working

if (temp){
  temp.addEventListener('submit', submitQuestion);
}


