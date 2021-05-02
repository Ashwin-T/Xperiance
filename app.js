const form = document.querySelector('#add-questions'); // for inputting form into firebase database


 
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
const docRef = db.collection('questions');
const output = document.querySelector('#questionList'); // for output form into firebase database

//feildName for firebase: questions asked (type: string)  

form.addEventListener('submit', (e)=>{
  e.preventDefault();
  if(form.questionBox.value != ''){
    docRef.add({
      questionsAsked: form.questionBox.value,

    }).then(function(){
      console.log("It worked lol, saved data");
    })
  }
    //feild: query.nameOfForm.value,
  document.getElementById('questionBox').value = '';
});//this works!


//try 5125
getRealtimeUpdates = function(){
  docRef.onSnapshot({includeMetadataChanges: true},function(doc){
    if (doc && doc.exists){
      const dataQ = doc.data();
      output.textContent = "Data: " + dataQ.questionsAsked;
    }
  })
}

getRealtimeUpdates(); //what the actual frick it doesnt work



// retrive and post data 
/*
function renderQuestions(doc){
  let li = document.createElement('li');
  let questionMessage = document.createElement('span');
  li.setAttribute('data-id',  doc.id);
  questionMessage.textContext = doc.data().questionsAsked;

  li.appendChild(questionMessage);

  questionList .appendChild(li);
  console.log(doc);
}

db.collection('questions').get().then((snapshot) =>{
  snapshot.docs.forEach(doc =>{
    renderQuestions(doc);
  }) 
})
*/

//try 2



