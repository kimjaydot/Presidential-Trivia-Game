function usaQuestion(question, choices, correctAnswer){
  this.question = question;
  this.choices = choices;
  this.correctAnswer = correctAnswer;
}
  
var allQuestions = [
  new usaQuestion("Who was the Vice President of George Washington?",["John Adams", "George M. Dallas", "Donald Trump", "Bill Clinton"],0),
  new usaQuestion("Which woman candidate won the Democratic Party in 2016 to run for President?",["Oprah Winfrey", "Nikki Haley", "Mariah Carey", "Hillary Clinton"],3),
  new usaQuestion("Who was the 44th President of the United States?",[ "Barack Obama", "Bugs Bunny", "Henry Ford", "Elon Musk"],0),
  new usaQuestion("What President signed signed the Emancipation Proclamation? ",["Mike Pence", "Joe Biden", "Michelle Obama", "Abraham Lincoln"],3),
  new usaQuestion("What year did President John F. Kennedy get assassinated?",["1988", "1963","1776","2011" ],1),
];

var currentquestion = 0;
var correctAnswers = 0;

function setupOptions() {
  $('#question').html(parseInt(currentquestion) + 1 + ". " + allQuestions[currentquestion].question);
  var options = allQuestions[currentquestion].choices;
  var formHtml = '';
  for (var i = 0; i < options.length; i++) {
    formHtml += '<div><input type="radio" name="option" value="' + i + '" class="options"><label for="option' + i + '">' + options[i] + '</label></div><br/>';
  }
  $('#form').html(formHtml);
  $(".options:eq(0)").prop('checked', true);
}

function checkAns() {
  if ($("input[name=option]:checked").val() == allQuestions[currentquestion].correctAnswer) {
    correctAnswers++;
  }
}

$(document).ready(function(){
    
  var $jumbotron = $(".jumbotron");
  var $start = $("#start");
  var $next = $("#next");
  var $result = $("#result");
  
    $jumbotron.hide();
    $start.click(function() {
        $jumbotron.fadeIn();
        $(this).hide();
    });


 var countDownClock = function() {
    $('.timer').each(function() {
      var count = parseInt($(this).html());
      if (count !== 0) {
        $(this).html(count - 1);
      }
    });
  };

  // Timer
  setInterval(countDownClock, 1000);
  

    setupOptions();

    $next.click(function(){
            event.preventDefault();
            checkAns();
            currentquestion++;
            if(currentquestion<allQuestions.length){
                setupOptions();
                if(currentquestion==allQuestions.length-1){
                    $next.html("Submit");
                    $next.click(function(){
                        $jumbotron.hide();
                        $result.html("You answered " + correctAnswers + " out of " + currentquestion + " questions! ").hide();
                        $result.fadeIn(1500);
                    });

                }
                
            };
    }); 
});













