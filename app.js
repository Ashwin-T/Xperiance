const form = document.querySelector('#add-questions'); // for inputting form into firebase database
var questionsPullRef = db.collection('questions');


const output = document.querySelector('#questionList'); // for output form into firebase database

 
//frontend javaScript


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
function visitSubmitReviewPage(){
  window.location="submitReview.html";
}
function visitReviewPage(){
  window.location = "reviewForumPageMain.html";
}
//end of Frontend Java Script

//Questions page w Firebase

//save data

//feildName for firebase: questions asked (type: string)  
//this is for entering questions
form.addEventListener('submit', (e)=>{
  e.preventDefault();
  if(form.questionBox.value != ''){
    questionsPullRef.add({
      questionsAsked: form.questionBox.value,

    }).then(function(){
      console.log("It worked, saved question data");
    })
  }
    //feild: query.nameOfForm.value,
  document.getElementById('questionBox').value = '';
});//this works!

//this is for entering reviews




function renderQuestions(doc){
  let ti = document.createElement('li');
  let questionText = document.createElement('span')
  ti.setAttribute('date-id', doc.id);
  questionText.textContent = doc.data().questionsAsked;

  ti.appendChild(questionText);

  output.appendChild(ti);

}

questionsPullRef.get().then((snapshot) =>{
    snapshot.docs.forEach(doc => {
      renderQuestions(doc);
    });
}) //works as of now


