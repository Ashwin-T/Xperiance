
var reviewPullRef = db.collection('review');  
const reviewForm = document.querySelector('#enterReview');

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


reviewForm.addEventListener('submit', (e)=>{
    console.log('subed')
    e.preventDefault();
    if(reviewForm.value != ''){
        reviewPullRef.add({
        class: reviewForm.classSelector.value,
        rating: reviewForm.ratingSelector.value,
        grade: reviewForm.gradeSelector.value,
        timeSpentPerNight: reviewForm.timeSelector.value,
        stressLevel: reviewForm.stressLevelSelector.value,
        similarClasses: reviewForm.similarClassSelector.value,
        review: reviewForm.reviewSelector.value,


        }).then(function(){
        console.log("It worked, saved review data");
        })
    }
        //feild: query.nameOfForm.value,
    
  });

