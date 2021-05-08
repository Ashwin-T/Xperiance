const form = document.querySelector('#add-questions'); // for inputting form into firebase database
var questionsPullRef = db.collection('questions');
const output = document.querySelector('#questionList'); // for output form into firebase database

 
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

//Questions page w Firebase

//save data

//feildName for firebase: questions asked (type: string)  

form.addEventListener('submit', (e)=>{
  e.preventDefault();
  if(form.questionBox.value != ''){
    questionsPullRef.add({
      questionsAsked: form.questionBox.value,

    }).then(function(){
      console.log("It worked lol, saved data");
    })
  }
    //feild: query.nameOfForm.value,
  document.getElementById('questionBox').value = '';
});//this works!


function renderCafe(doc){
  let li = document.createElement('li');
  let questionText = document.createElement('span')
  li.setAttribute('date-id', doc.id);
  questionText.textContent = doc.data().questionsAsked;

  li.appendChild(questionText);

  output.appendChild(li);

  
}

questionsPullRef.get().then((snapshot) =>{
    snapshot.docs.forEach(doc => {
      renderCafe(doc);
    });
}) //works as of now




